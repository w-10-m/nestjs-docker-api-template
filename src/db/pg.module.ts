import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ConfigurationService } from '../config/config.service';
import { PgController } from './pg.controller';
import { EntitiesModule } from '@west10media/db';
import { PgService } from './pg.service';

@Module({
  imports: [
    ConfigModule,
    EntitiesModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigurationService) => ({
        type: 'postgres',
        host: configService.getDatabaseHost(),
        port: configService.getDatabasePort(),
        username: configService.getDatabaseUsername(),
        password: configService.getDatabasePassword(),
        database: configService.getDatabaseName(),
        synchronize: true,
        entities:[],
        autoLoadEntities: true,
      }),
      inject: [ConfigurationService],
    }),
  ],
  controllers: [PgController],
  providers: [ConfigurationService, PgService],
  exports: [TypeOrmModule, ConfigurationService],
})
export class PgModule {}