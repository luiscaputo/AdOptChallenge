import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cookiesbox } from "./Cookiesbox";

@Entity("box", { schema: "adoptchallenge" })
export class Box {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 150 })
  name: string;

  @Column("varchar", { name: "description", length: 35 })
  description: string;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @OneToMany(() => Cookiesbox, (cookiesbox) => cookiesbox.box)
  cookiesboxes: Cookiesbox[];
}
