/*
 * @Author: yuanzhirong
 * @Date: 2023-10-31 11:56:08
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-11-30 10:31:32
 * @Description:
 */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './doc';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  // 添加数据校验
  app.useGlobalPipes(new ValidationPipe());

  // 创建swagger文档
  generateDocument(app);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
