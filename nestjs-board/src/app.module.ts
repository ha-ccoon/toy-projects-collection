import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { databaseConfig } from './boards/config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), BoardsModule],
})
export class AppModule {}
