// service: DB Logics
import { Injectable } from '@nestjs/common';
import { BoardStatus } from './types/board-status';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entity/board.entity';
import { BoardsRepository } from './repository/board.repository';
import { User } from 'src/auth/entity/user.entity';

@Injectable()
export class BoardsService {
  constructor(private readonly boardsRepository: BoardsRepository) {}

  async getAllBoards(user: User): Promise<Board[]> {
    return await this.boardsRepository.getAllBoards(user);
  }

  async getBoardById(id: number): Promise<Board> {
    return await this.boardsRepository.getBoardById(id);
  }

  async createBoard(
    CreateBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    return await this.boardsRepository.createBoard(CreateBoardDto, user);
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    return await this.boardsRepository.updateBoardStatus(id, status);
  }

  async deleteBoard(id: number): Promise<void> {
    return this.boardsRepository.deleteBoard(id);
  }
}
