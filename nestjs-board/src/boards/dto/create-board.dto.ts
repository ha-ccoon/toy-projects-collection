// define data from request
import { IsNotEmpty } from 'class-validator';
export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
