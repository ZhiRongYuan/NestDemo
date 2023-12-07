/*
 * @Author: yuanzhirong
 * @Date: 2023-12-07 15:17:08
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-12-07 15:17:59
 * @Description:
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
