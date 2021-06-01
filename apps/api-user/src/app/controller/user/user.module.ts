import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { TokenEntity, UserEntity, UserImageEntity } from '@wtf-minimum/data';
import { UserController } from './user.controller';
import { UserService } from './service/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserImageEntity, TokenEntity])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
