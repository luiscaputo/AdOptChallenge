import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cookies } from "./Cookies";

@Entity("flavors", { schema: "adoptchallenge" })
export class Flavors {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 150 })
  name: string;

  @Column("varchar", { name: "code", length: 6 })
  code: string;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @OneToMany(() => Cookies, (cookies) => cookies.flavor)
  cookies: Cookies[];
}
