import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class ShowUserInput {
  @IsNumber()
  @Type(() => Number)
  id: number;
}
