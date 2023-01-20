import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UseCase } from '../../usecase';
import { ShowUserInput } from './show-user.input';
import { ShowUserOutput } from './show-user.output';

@Injectable()
export class ShowUserUseCase extends UseCase<ShowUserInput, ShowUserOutput> {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
  ) {
    super();
  }

  public async execute(input: ShowUserInput): Promise<ShowUserOutput> {
    console.log(input);
    const user = await this.userRepository.findById(input.id);
    if (!user) throw new Error(`User not found: ID(${input.id})`);
    return user;
  }
}
