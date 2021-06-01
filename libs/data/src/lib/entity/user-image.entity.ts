import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("UserImage")
export class UserImageEntity {
  @Index({ unique: true })
  @PrimaryGeneratedColumn('uuid') id!: string;

  @ManyToOne('UserEntity', { cascade: true })
  user: any;

  @Column('uuid')
  type: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  mime: string;

  @Column({ default: true })
  main: boolean;

  @Column({ default: false })
  logo: boolean;

  @Column({ default: false })
  banner: boolean;

  @Column({ default: true })
  active: boolean;

  @Column({ default: false })
  deleted: boolean;

  @Column({ type: 'timestamp', default: () => 'now()' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'now()' })
  modified: Date;
}
