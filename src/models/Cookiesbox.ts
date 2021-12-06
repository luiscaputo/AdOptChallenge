import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cookies } from "./Cookies";
import { Box } from "./Box";

@Index("cookieId", ["cookieId"], {})
@Index("boxId", ["boxId"], {})
@Entity("cookiesbox", { schema: "adoptchallenge" })
export class Cookiesbox {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cookieId" })
  cookieId: number;

  @Column("int", { name: "boxId" })
  boxId: number;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @ManyToOne(() => Cookies, (cookies) => cookies.cookiesboxes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cookieId", referencedColumnName: "id" }])
  cookie: Cookies;

  @ManyToOne(() => Box, (box) => box.cookiesboxes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "boxId", referencedColumnName: "id" }])
  box: Box;
}
