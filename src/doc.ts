/*
 * @Author: yuanzhirong
 * @Date: 2023-11-01 11:30:12
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-11-01 11:30:22
 * @Description:
 */
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as packageConfig from '../package.json';

export const generateDocument = (app) => {
  const options = new DocumentBuilder()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .addBearerAuth() // 增加鉴权功能
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/doc', app, document);
};
