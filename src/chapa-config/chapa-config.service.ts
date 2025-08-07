import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChapaConfigService {
  constructor(private configService: ConfigService) {}

  get apiKey(): string {
    const apiKey = this.configService.get<string>('CHAPA_API_KEY');
    if (!apiKey) {
      throw new Error('CHAPA_API_KEY is not defined in .env');
    }
    return apiKey;
  }

  get secretKey(): string {
    const secretKey = this.configService.get<string>('Test_Secret_key');
    if (!secretKey) {
      throw new Error('Test_Secret_key is not defined in .env');
    }
    return secretKey;
  }

  get environment(): string {
    return this.configService.get<string>('CHAPA_ENVIRONMENT', 'sandbox');
  }

  get baseUrl(): string {
    return this.environment === 'production'
      ? 'https://api.chapa.co'
      : 'https://sandbox.chapa.co';
  }
}
