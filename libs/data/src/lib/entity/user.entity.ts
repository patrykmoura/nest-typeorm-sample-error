import {BaseEntity, Column, Entity, Index, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {TokenEntity} from "./token.entity";
import {JoinColumn} from "typeorm/browser";

@Entity("User")
export class UserEntity extends BaseEntity {
  @Index({ unique: true })
  @PrimaryGeneratedColumn('uuid') id!: string;

  // @OneToMany('UserSocialEntity', 'user') social!: any[];
  @OneToMany('UserImageEntity', 'user') image!: any[];

  @OneToOne(() => TokenEntity)
  @JoinColumn() // comment this and will work...
  token: TokenEntity;
}
