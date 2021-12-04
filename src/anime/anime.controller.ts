import { Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';

@Controller()
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Get()
  findAll() {
    return this.animeService.findAll()
  }

}
