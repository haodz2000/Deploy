import { AudioService } from './audio.service';
import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('audio')
export class AudioProcessor {
  constructor(
    private readonly audioService: AudioService
  ){}
  private readonly logger = new Logger(AudioProcessor.name);

  @Process('transcode')
  async handleTranscode(job: Job) {
    const data = await this.audioService.processData(job.data)
    this.logger.debug('Start transcoding...');
    this.logger.debug(data);
    this.logger.debug('Transcoding completed');
  }
}
