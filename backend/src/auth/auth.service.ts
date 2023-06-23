import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(instituteId: string, password: string) {
    const user = await this.usersService.findUserById(instituteId);

    if (!user || !(await compare(password, user.password))) {
      throw new UnauthorizedException();
    }

    delete user.password;
    const payload = { user };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(
    instituteId: string,
    password: string,
    type: string,
    name: string,
  ) {
    return await this.usersService.createUser(
      instituteId,
      password,
      type,
      name,
    );
  }
}
