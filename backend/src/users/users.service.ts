import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findUserById(instituteId: string) {
    return await this.prisma.user.findFirst({
      where: {
        instituteId,
      },
    });
  }

  async createUser(
    instituteId: string,
    password: string,
    type: string,
    name: string,
  ) {
    const newUser = await this.prisma.user.create({
      data: {
        instituteId,
        password: await hash(password, 10),
        type,
        name,
      },
    });

    return newUser.id;
  }

  async createSessions(user: User, start: Date, interval = 1) {
    if (user.type === 'student') {
      throw new UnauthorizedException('Only deans can create sessions');
    }
    const newSession = await this.prisma.session.create({
      data: {
        deanId: user.id,
        start,
        interval,
      },
    });

    return newSession.id;
  }

  async getFreeSessions() {
    const sessions = await this.prisma.session.findMany({
      where: {
        booking: null,
        start: { gte: new Date() },
      },
      include: {
        dean: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });

    return sessions;
  }

  async bookSession(user: User, sessionId: number) {
    if (user.type === 'dean') {
      throw new UnauthorizedException('Only students can book sessions');
    }

    const newSession = await this.prisma.bookedSessions.create({
      data: {
        studentId: user.id,
        sessionId,
      },
    });

    return newSession.id;
  }

  async getBookedSessions(user: User) {
    const pendingSessions = await this.prisma.bookedSessions.findMany({
      where: {
        session: {
          deanId: user.id,
          start: { gte: new Date() },
        },
      },
      include: {
        session: true,
        student: {
          select: {
            id: true,
            name: true,
            instituteId: true,
          },
        },
      },
    });

    return pendingSessions;
  }
}
