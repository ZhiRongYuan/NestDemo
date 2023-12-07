/*
 * @Author: yuanzhirong
 * @Date: 2023-12-05 16:34:23
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-12-05 16:34:50
 * @Description:
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
