// src/config/configuration.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}

  getDatabaseType(): string {
    return this.configService.get<string>('DB_TYPE', 'postgres');
  }

  getDatabaseHost(): string {
    return this.configService.get<string>('DB_HOST', 'app');
  }

  getDatabasePort(): number {
    return this.configService.get<number>('DB_PORT', 5432);
  }

  getDatabaseUsername(): string {
    return this.configService.get<string>('DB_USER', 'postgres');
  }

  getDatabasePassword(): string {
    return this.configService.get<string>('DB_PASSWORD', 'postgres');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DB_NAME', 'postgres');
  }

  // Add more getters and setters as needed for other environment variables
}