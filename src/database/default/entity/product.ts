import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseTimestamp } from "./baseTimestamp";

@Entity()
export default class Product extends BaseTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  qty: number;

  @Column({
    type: "text"
  })
  picture: string;

  @Column({
    type: "date",
  })
  expiredAt: string;

  @Column()
  isActive: boolean;
}
