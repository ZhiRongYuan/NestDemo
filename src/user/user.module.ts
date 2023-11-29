/*
 * @Author: yuanzhirong
 * @Date: 2023-11-03 11:50:05
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-11-06 11:32:38
 * @Description:
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
