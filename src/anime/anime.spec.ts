import { Test, TestingModule } from '@nestjs/testing';
import { Anime } from './anime';

describe('Anime', () => {
  let provider: Anime;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Anime],
    }).compile();

    provider = module.get<Anime>(Anime);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
