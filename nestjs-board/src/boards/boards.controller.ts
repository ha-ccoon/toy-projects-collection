import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './types/board-status';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipe/board-status-validation.pipe';
import { Board } from './entity/board.entity';
@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(CreateBoardDto);
  }

  // /**
  //  *
  //  * @param title
  //  * @param description
  //  * @returns: board (return only board itself so the type is just "Board")
  //  */
  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body('') CreateBoardDto: CreateBoardDto): Board {
  //   return this.boardsService.createBoard(CreateBoardDto);
  // }

  @Patch('/:id/status')
  updateBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }
}
