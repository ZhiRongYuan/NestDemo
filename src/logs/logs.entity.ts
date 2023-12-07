/*
 * @Author: yuanzhirong
 * @Date: 2023-12-07 15:18:09
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-12-07 15:19:38
 * @Description:
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Logs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  method: string;

  @Column()
  data: string;

  @Column()
  result: number;
}
