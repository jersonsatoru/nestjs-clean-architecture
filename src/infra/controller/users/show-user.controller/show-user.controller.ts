import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ShowUserInput } from 'src/domain/usecases/users/show-user.usecase/show-user.input';
import { ShowUserOutput } from 'src/domain/usecases/users/show-user.usecase/show-user.output';
import { ShowUserUseCase } from 'src/domain/usecases/users/show-user.usecase/show-user.usecase';

@Controller()
export class ShowUserController {
  constructor(private readonly usecase: ShowUserUseCase) {}

  @Get()
  @UsePipes(new ValidationPipe({ whitelist: false, transform: true }))
  async handle(@Query() input: ShowUserInput): Promise<ShowUserOutput> {
    return this.usecase.execute(input);
  }
}
