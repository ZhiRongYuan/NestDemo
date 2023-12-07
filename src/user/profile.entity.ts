/*
 * @Author: yuanzhirong
 * @Date: 2023-12-07 15:14:44
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-12-07 15:22:50
 * @Description: 
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: number;

  @Column()
  photo: string;

  @Column()
  address: string;
}
