import { DataSource, Repository } from 'typeorm';
import { Board } from '../entity/board.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from '../dto/create-board.dto';
import { BoardStatus } from '../types/board-status';
import { User } from 'src/auth/entity/user.entity';

@Injectable()
export class BoardsRepository {
  private boardsRepository: Repository<Board>;

  constructor(private readonly dataSource: DataSource) {
    this.boardsRepository = this.dataSource.getRepository(Board);
  }

  async getAllBoards(): Promise<Board[]> {
    const boards = await this.boardsRepository.find();
    return boards;
  }

  async getBoardById(id: number): Promise<Board> {
    const board = await this.boardsRepository.findOne({
      where: { id },
    });

    if (!board) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return board;
  }

  async createBoard(
    CreateBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, description } = CreateBoardDto;
    const board = await this.boardsRepository.save({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });
    return board;
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;

    await this.boardsRepository.save(board);
    return board;
  }

  async deleteBoard(id: number): Promise<void> {
    const board = await this.boardsRepository.delete(id);

    if (board.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }
}
