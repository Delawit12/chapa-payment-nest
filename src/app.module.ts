import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChapaService } from './chapa/chapa.service';
import { ChapaConfigService } from './chapa-config/chapa-config.service';
import { PaymentsController } from './payments/payments.controller';
import { ChapaModule } from './chapa/chapa.module';
import { ChapaUtilsService } from './chapa-utils/chapa-utils.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(), //important for the .env configuration
    ChapaModule,
  ],
  controllers: [AppController, PaymentsController],
  providers: [AppService, ChapaService, ChapaConfigService, ChapaUtilsService],
})
export class AppModule {}
