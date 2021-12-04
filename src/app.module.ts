import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimeModule } from './anime/anime.module';
import { WikiModule } from './wiki/wiki.module';
import Routes from './routes/'

@Module({
  imports: [ConfigModule.forRoot(), RouterModule.register(Routes), AnimeModule, WikiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
