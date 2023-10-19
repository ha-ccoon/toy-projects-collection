// service: DB Logics
import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './model/board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  getBoardById(id: string): Board {
    const boardById = this.boards.find((board) => id === board.id);

    if (!boardById) {
      throw new NotFoundException(`Can't find board id ${id}`);
    }
    return boardById;
  }

  createBoard(CreateBoardDto: CreateBoardDto) {
    const { title, description } = CreateBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }

  deleteBoard(id: string): void {
    const board = this.getBoardById(id);
    this.boards = this.boards.filter((item) => board.id !== item.id);
  }
}
