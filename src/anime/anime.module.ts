import { Module } from '@nestjs/common';
import { FirestoreService } from 'src/firestore/firestore.service';
import { AnimeController } from './anime.controller';
import { AnimeService } from './anime.service';

@Module({
  controllers: [AnimeController],
  providers: [AnimeService, FirestoreService]
})
export class AnimeModule {}
