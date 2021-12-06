import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Format } from "./Format";
import { Flavors } from "./Flavors";
import { Cookiesbox } from "./Cookiesbox";

@Index("formatId", ["formatId"], {})
@Index("flavorId", ["flavorId"], {})
@Entity("cookies", { schema: "adoptchallenge" })
export class Cookies {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 150 })
  name: string;

  @Column("int", { name: "formatId" })
  formatId: number;

  @Column("int", { name: "flavorId" })
  flavorId: number;

  @Column("float", { name: "price", precision: 12 })
  price: number;

  @Column("varchar", { name: "description", length: 35 })
  description: string;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @ManyToOne(() => Format, (format) => format.cookies, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "formatId", referencedColumnName: "id" }])
  format: Format;

  @ManyToOne(() => Flavors, (flavors) => flavors.cookies, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "flavorId", referencedColumnName: "id" }])
  flavor: Flavors;

  @OneToMany(() => Cookiesbox, (cookiesbox) => cookiesbox.cookie)
  cookiesboxes: Cookiesbox[];
}
