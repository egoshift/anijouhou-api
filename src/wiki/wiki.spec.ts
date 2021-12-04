import { Test, TestingModule } from '@nestjs/testing';
import { Wiki } from './wiki';

describe('Wiki', () => {
  let provider: Wiki;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Wiki],
    }).compile();

    provider = module.get<Wiki>(Wiki);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
