import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/domain/repositories/user.repository';

@Injectable()
export class UserRepositoryInMemory implements UserRepository {
  constructor(
    private users: User[] = [
      {
        id: 1,
        name: 'User cadastrado',
      },
    ],
  ) {}

  async save(user: User): Promise<User> {
    const newUser: User = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
    return newUser;
  }

  async findById(id: number): Promise<User | undefined> {
    return this.users.find((u) => u.id === id);
  }
}
