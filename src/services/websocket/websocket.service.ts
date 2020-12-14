import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WebsocketEntity } from '@src/entities/model/websocket/websocket.entity';

@Injectable()
export class WebsocketService {
  constructor(
    @InjectRepository(WebsocketEntity)
    private readonly websocketRepository: Repository<WebsocketEntity>,
  ) {}

  async addUser({ username: string, socketId: number }): Promise<any> {
    console.log('nihao');
  }

  async getUser(socketId: number): Promise<any> {
    console.log('nihaoss');
  }
}
