import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';

import { MediaService } from './media.service';
import { UtilService } from 'src/shared/services/util.service';

import { MediaController } from './media.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MulterModule.register({
      dest: './uploads', // Temporarily store uploaded files
    }),
  ],
  controllers: [MediaController],
  providers: [MediaService, UtilService],
  exports: [MediaService],
})
export class MediaModule {}
