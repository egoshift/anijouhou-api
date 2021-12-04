import { Body, Controller, Get, Query } from '@nestjs/common';
import { DetailsWikiDto } from './dto/details-wiki.dto';
import { SearchWikiDto } from './dto/search-wiki.dto';
import { WikiService } from './wiki.service';

@Controller()
export class WikiController {
  constructor(private wikiService: WikiService) {}

  @Get()
  fetchAll(): unknown {
    return this.wikiService.fetchAll()
  }

  @Get('details')
  fetchOne(@Query() detailsWikiDto: DetailsWikiDto): unknown {
    return this.wikiService.fetchOne(detailsWikiDto)
  }

  @Get('search')
  searchOne(@Body() searchWikiDto: SearchWikiDto): unknown {
    return this.wikiService.search(searchWikiDto)
  }

}
