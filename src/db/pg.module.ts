import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ConfigurationService } from '../config/config.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigurationService) => ({
        type: 'postgres',//configService.getDatabaseType(),
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