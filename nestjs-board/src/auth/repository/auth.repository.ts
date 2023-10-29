import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class AuthRepository {
  private authRepository: Repository<User>;

  constructor(private readonly dataSource: DataSource) {
    this.authRepository = this.dataSource.getRepository(User);
  }

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const { username, password } = createUserDto;

    if (!username || !password) {
      throw new BadRequestException(`Not enough information provided`);
    }
    try {
      await this.authRepository.save({
        username,
        password,
      });
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async getUserByUsername(username: string) {
    const user = await this.authRepository.findOne({
      where: {
        username,
      },
    });
    return user;
  }

  async updateUser() {}
  async deleteUser() {}
}
