import {Column, Entity, Index, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity("Token")
export class TokenEntity {
  @Index({ unique: true })
  @PrimaryGeneratedColumn('uuid') id!: string;

  @Column()
  tokenType: string;

  @Column()
  accessToken: string;

}
