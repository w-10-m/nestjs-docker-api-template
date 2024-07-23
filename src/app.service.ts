import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Hello World, from the service! or is it');
    return 'Hello World!';
  }
}
