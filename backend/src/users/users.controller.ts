import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { BookSessionDto, NewSessionDto } from './dtos/session';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Post('create/session')
  createSession(@Body() sessionDto: NewSessionDto, @Request() req) {
    return this.usersService.createSessions(
      req.user.user,
      sessionDto.start,
      sessionDto.interval,
    );
  }

  @UseGuards(AuthGuard)
  @Post('book')
  bookSession(@Body() sessionDto: BookSessionDto, @Request() req) {
    return this.usersService.bookSession(req.user.user, sessionDto.sessionId);
  }

  @UseGuards(AuthGuard)
  @Get('sessions')
  getFreeSessions() {
    return this.usersService.getFreeSessions();
  }

  @UseGuards(AuthGuard)
  @Get('bookings')
  getBookedSessions(@Request() req) {
    return this.usersService.getBookedSessions(req.user.user);
  }
}
