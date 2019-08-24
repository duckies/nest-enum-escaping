import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum Realm {
  Hyjal = "Hyjal",
  Frostwolf = "Frostwolf",
  Nerzhul = "Ner'zhul",
  Kiljaeden = "Kil'jaeden",
  Blackrock = "Blackrock",
  Tichondrius = "Tichondrius",
  SilverHand = "Silver Hand",
  Doomhammer = "Doomhammer"
}

@Entity("character")
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: Realm })
  realm: Realm;
}
