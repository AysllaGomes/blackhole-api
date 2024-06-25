import { Test, TestingModule } from '@nestjs/testing';

import { BlackholesService } from './blackholes.service';

describe('BlackholesService', (): void => {
  let service: BlackholesService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlackholesService],
    }).compile();

    service = module.get<BlackholesService>(BlackholesService);
  });

  it('should be defined', (): void => {
    expect(service).toBeDefined();
  });
});
