import { BullModule } from '@nestjs/bull';
import { AudioService } from './audio.service';
import { AudioController } from './audio.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AudioProcessor } from './audio.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio'
    })
  ],
  controllers: [AudioController],
  providers: [AudioService, AudioProcessor],
})
export class AudioModule {}
