import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EntitiesModule }  from 'db';
import { ConfigurationService } from '../config/config.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, EntitiesModule],
      useFactory: async (configService: ConfigurationService) => ({
        type: 'postgres',
        host: configService.getDatabaseHost(),
        port: configService.getDatabasePort(),
        username: configService.getDatabaseUsername(),
        password: configService.getDatabasePassword(),
        database: configService.getDatabaseName(),
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        entities:[],
        autoLoadEntities: true,
      }),
      inject: [ConfigurationService],
    }),
  ],
  providers: [ConfigurationService],
  exports: [TypeOrmModule, ConfigurationService],
})
export class PgModule {}