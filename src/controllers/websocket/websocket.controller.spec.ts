import { Test, TestingModule } from '@nestjs/testing';
import { WebscoketController } from './websocket.controller';

describe('WebscoketController', () => {
  let controller: WebscoketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebscoketController],
    }).compile();

    controller = module.get<WebscoketController>(WebscoketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
