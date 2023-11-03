/*
 * @Author: yuanzhirong
 * @Date: 2023-11-03 11:23:43
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-11-03 11:39:54
 * @Description:
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  /**
   * 手机号（系统唯一）
   */
  @ApiProperty({ example: '18166049498' })
  readonly phoneNumber: string;

  @ApiProperty({ example: '亲子手工艺' }) name: string;

  @ApiProperty({ example: '123456' })
  password: string;

  @ApiProperty({ example: '283211086@qq.com' })
  email: string;
}
