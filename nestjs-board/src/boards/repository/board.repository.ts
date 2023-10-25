// import { DataSource, Repository } from 'typeorm';
// import { Board } from '../entity/board.entity';
// import { CreateBoardDto } from '../dto/create-board.dto';
// import { BoardStatus } from '../types/board-status';

// export const boardProviders = [
//   {
//     provide: 'board_repository',
//     useFactory: (dataSource: DataSource) => dataSource.getRepository(Board),
//   },
// ];
// export class BoardRepository extends Repository<Board> {
//   private boardsRepository = Repository<Board>;

//   async createBoard(CreateBoardDto: CreateBoardDto): Promise<Board> {

//   }
// }
