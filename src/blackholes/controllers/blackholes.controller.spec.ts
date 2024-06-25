import { Test, TestingModule } from '@nestjs/testing';
import { BlackholesController } from './blackholes.controller';

describe('BlackholesController', (): void => {
  let controller: BlackholesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlackholesController],
    }).compile();

    controller = module.get<BlackholesController>(BlackholesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
