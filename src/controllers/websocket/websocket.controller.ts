import { Controller, Post, UseGuards, Get } from '@nestjs/common';
import websocketConfig from '@src/config/websocket.config';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { WebsocketService } from '@src/services/websocket/websocket.service';
import { AuthGuard } from '@src/guard/auth/auth.guard';
import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
@ApiTags('websocket内容相关')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller(`${websocketConfig.websocketPath}`)
export class WebsocketController implements OnGatewayConnection {
  constructor(private readonly websocketService: WebsocketService) {}
  @WebSocketServer()
  server: Server;

  handleConnection(socket) {
    console.log(`${socket.id} 上线！`);
  }
  handleDisConnect(socket) {
    console.log(`${socket.id} 下线！`);
    // this.websocketService.deleteUser(socket.id);
  }

  @SubscribeMessage('addUser')
  @Post()
  async addUser(sender, username: string): Promise<any> {
    await this.websocketService.addUser({
      username,
      socketId: sender.id,
    });
    sender.broadcast.emit('newUser', username);
  }

  @Get()
  @SubscribeMessage('sendMessage')
  async sendMessage(sender, msg): Promise<any> {
    const chat = await this.websocketService.getUser((sender.id = 2));
    sender.broadcast.emit('newMessage', {
      message: msg,
      username: chat.userName,
    });
  }
}
