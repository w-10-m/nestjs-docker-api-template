// src/config/config.module.ts
import { Module, Global } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigurationService } from './config.service';

@Global() // Optional: Makes ConfigModule globally available
@Module({
  imports: [NestConfigModule.forRoot({
    isGlobal: true,
  })],
  providers: [ConfigurationService],
  exports: [ConfigurationService]
})
export class ConfigModule {}