// src/chapa/chapa.module.ts

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // ✅ Needed for HttpService
import { ConfigModule } from '@nestjs/config';
import { ChapaService } from './chapa.service';
import { ChapaConfigService } from '../chapa-config/chapa-config.service';
import { ChapaUtilsService } from 'src/chapa-utils/chapa-utils.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(), //Loads .env
  ],
  providers: [ChapaService, ChapaConfigService, ChapaUtilsService],
  exports: [ChapaService],
})
export class ChapaModule {}
