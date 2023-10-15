import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  /**
   *
   * @param title
   * @param description
   * @returns: board (return only board itself so the type is just "Board")
   */
  @Post()
  createBoard(@Body('') CreateBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(CreateBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    return this.boardsService.deleteBoard(id);
  }
}
