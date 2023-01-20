import { User } from '../entities/user.entity';

export interface UserRepository {
  save(user: User): Promise<User>;
  findById(id: number): Promise<User>;
}
