import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationService } from './config/config.service';
import { ConfigModule } from './config/config.module';
import { PgModule } from './db/pg.module';

@Module({
  imports: [
    ConfigModule,
    PgModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigurationService],
})
export class AppModule {}
