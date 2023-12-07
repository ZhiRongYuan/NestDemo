/*
 * @Author: yuanzhirong
 * @Date: 2023-11-30 10:41:20
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-12-06 15:27:02
 * @Description:
 */
/*
 * @Author: yuanzhirong
 * @Date: 2023-11-03 11:23:43
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-11-29 17:43:36
 * @Description:
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/config.enum';
import * as config from 'config';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private configService: ConfigService,
  ) {}

  @Post()
  @ApiOperation({
    summary: '新增用户',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    // const db = this.configService.get(ConfigEnum.DB);
    // console.log('config_DB:' + db);
    console.log(this.configService.get('db'));
    console.log(config.get('database'));

    const password =
      process.env.DB_PASS || this.configService.get(ConfigEnum.DB_PASSWORD);
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
