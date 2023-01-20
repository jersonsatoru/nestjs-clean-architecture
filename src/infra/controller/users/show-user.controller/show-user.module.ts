import { Module } from '@nestjs/common';
import { ShowUserUseCase } from 'src/domain/usecases/users/show-user.usecase/show-user.usecase';
import { UserRepositoryInMemory } from 'src/infra/repository/in-memory/user.repository.in-memory';
import { ShowUserController } from './show-user.controller';

@Module({
  imports: [],
  controllers: [ShowUserController],
  providers: [
    ShowUserUseCase,
    {
      provide: 'UserRepository',
      useValue: new UserRepositoryInMemory(),
    },
  ],
})
export class ShowUserModule {}
