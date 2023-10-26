import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from './repository/auth.repository';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { create } from 'domain';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async signUp(createUserDto: CreateUserDto): Promise<void> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    createUserDto.password = hashedPassword;

    return await this.authRepository.createUser(createUserDto);
  }

  async signIn(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;

    const user = await this.authRepository.getUserByUsername(username);
    console.log(user);

    if (user) {
      await bcrypt.compare(password, user.password);
      return { message: 'Login success' };
    } else {
      throw new UnauthorizedException('Login failed');
    }
  }

  async updateUser() {
    return await this.authRepository.updateUser();
  }
  async deleteUser() {
    return await this.authRepository.deleteUser();
  }
}
