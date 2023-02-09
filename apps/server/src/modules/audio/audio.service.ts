/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class AudioService {
  async processData(data){
    return data;
  }
}
