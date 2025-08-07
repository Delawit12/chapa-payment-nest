import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ChapaConfigService } from '../chapa-config/chapa-config.service';
import { lastValueFrom } from 'rxjs';
import { ChapaUtilsService } from 'src/chapa-utils/chapa-utils.service';
// Main service to initialize/verify payments.

@Injectable()
export class ChapaService {
  constructor(
    private readonly httpService: HttpService, // ✅ should be imported from '@nestjs/axios'
    private readonly chapaConfigService: ChapaConfigService,
    private readonly chapaUtilsService: ChapaUtilsService,
  ) {}

  async initializePayment(paymentData: any): Promise<any> {
    const secret = this.chapaConfigService.secretKey;
    const txRef = this.chapaUtilsService.generateTxRef();
    paymentData.tx_ref = txRef;
    console.log(paymentData.tx_ref);

    const response = await lastValueFrom(
      this.httpService.post(
        'https://api.chapa.co/v1/transaction/initialize',
        paymentData,
        {
          headers: {
            Authorization: `Bearer ${secret}`,
          },
        },
      ),
    );

    // console.log('...............', response.data);
    return response.data;
  }

  async verifyPayment(transactionId: string): Promise<any> {
    const secret = this.chapaConfigService.secretKey;

    const response = await lastValueFrom(
      this.httpService.get(
        `https://api.chapa.co/v1/transaction/verify/${transactionId}`,
        {
          headers: {
            Authorization: `Bearer ${secret}`,
          },
        },
      ),
    );

    return response.data;
  }
}
