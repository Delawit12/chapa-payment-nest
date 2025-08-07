import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

//  to validate email and generate tx_ref

@Injectable()
export class ChapaUtilsService {
  //Generates a unique transaction reference (tx_ref).
  generateTxRef(): string {
    return `chapa_tx_${uuidv4()}`;
  }
}
