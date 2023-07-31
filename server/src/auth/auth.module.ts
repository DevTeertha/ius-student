import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { UtilService } from 'src/shared/services/util.service';

import { AuthController } from './auth.controller';

import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

import { jwtConstants } from 'src/shared/constant/jwt.constant';

import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, UtilService],
})
export class AuthModule {}
