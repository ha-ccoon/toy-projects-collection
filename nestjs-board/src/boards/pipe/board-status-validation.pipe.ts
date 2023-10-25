import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../types/board-status';

export class BoardStatusValidationPipe implements PipeTransform {
  // can access to method, but can't modify
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }

  /**
   * custom-pipe: check validation of data
   * @param value: value of the body input
   * @returns
   */
  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`Not applicable type of status`);
    }

    return value;
  }
}
