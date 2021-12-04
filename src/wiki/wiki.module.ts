import { Module } from '@nestjs/common';
import { WikiController } from './wiki.controller';
import { HttpModule } from '@nestjs/axios';
import { WikiService } from './wiki.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [WikiController],
  providers: [WikiService]
})
export class WikiModule {}
