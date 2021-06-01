import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './controller/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'xxxxxxxxxxxxxx',
      port: 3306,
      username: 'xxxxxxxxxxxxxx',
      database: 'xxxxxxxxxxxxxx',
      password: 'xxxxxxxxxxxxxx',
      autoLoadEntities: true,
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
