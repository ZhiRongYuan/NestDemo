/*
 * @Author: yuanzhirong
 * @Date: 2023-10-31 11:56:08
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-11-01 11:31:32
 * @Description: 
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  generateDocument(app);
  await app.listen(3000);
}
bootstrap();
