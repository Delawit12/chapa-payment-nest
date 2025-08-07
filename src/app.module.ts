import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChapaService } from './chapa/chapa.service';
import { ChapaConfigService } from './chapa-config/chapa-config.service';
import { PaymentsController } from './payments/payments.controller';

@Module({
  imports: [],
  controllers: [AppController, PaymentsController],
  providers: [AppService, ChapaService, ChapaConfigService],
})
export class AppModule {}
