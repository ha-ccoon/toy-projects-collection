// service: DB Logics
import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './types/board-status';
import { CreateBoardDto } from './dto/create-board.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entity/board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const board = await this.boardRepository.findOne({
      where: { id },
    });

    if (!board) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return board;
  }

  async createBoard(CreateBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = CreateBoardDto;
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    await this.boardRepository.save(board);
    return board;
  }

  async getAllBoards(): Promise<Board[]> {
    const boards = await this.boardRepository.find();
    return boards;
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;

    await this.boardRepository.save(board);
    return board;
  }

  async deleteBoard(id: number): Promise<void> {
    const board = await this.boardRepository.delete(id);

    if (board.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }
}
