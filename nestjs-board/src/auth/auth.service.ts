import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from './repository/auth.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<void> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    createUserDto.password = hashedPassword;

    return await this.authRepository.createUser(createUserDto);
  }

  async signIn(createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
    const { username, password } = createUserDto;

    const user = await this.authRepository.getUserByUsername(username);

    if (user) {
      await bcrypt.compare(password, user.password);

      // issue accessToken
      const payload = { username };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken: accessToken };
    } else {
      throw new UnauthorizedException('Login failed');
    }
  }

  async getUserInfo(createUserDto: CreateUserDto) {
    this.signIn(createUserDto); 
  }

  async updateUser() {
    return await this.authRepository.updateUser();
  }
  async deleteUser() {
    return await this.authRepository.deleteUser();
  }
}
