import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { databaseConfig } from './boards/config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), BoardsModule, AuthModule],
})
export class AppModule {}
