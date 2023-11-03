/*
 * @Author: yuanzhirong
 * @Date: 2023-11-03 11:23:43
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-11-03 11:59:27
 * @Description:
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateUserDto {
  /**
   * 手机号（系统唯一）
   */
  @ApiProperty({ example: '18166049498' })
  @Matches(/^1\d{10}$/g, { message: '请输入手机号' })
  readonly phoneNumber: string;

  @ApiProperty({ example: '亲子手工艺' })
  name: string;

  @ApiProperty({ example: '123456' })
  @IsNotEmpty()
  @Length(6,10)
  password: string;

  @ApiProperty({ example: '283211086@qq.com' })
  @IsEmail()
  email: string;
}
