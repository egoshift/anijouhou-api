import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';
import * as fs from 'fs';
import { Observable } from 'rxjs';
import { AxiosResponse } from '@nestjs/axios/node_modules/axios';

import { SOURCES } from 'src/constants/sources';
import parseXmlToJson from 'src/utils/parseXmlToJson';
import { SearchWikiDto } from './dto/search-wiki.dto';
import { DetailsWikiDto } from './dto/details-wiki.dto';

@Injectable()
export class WikiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) { }

  fetchAll(): Observable<AxiosResponse<unknown>> {
    return this.httpService.get(SOURCES.ENDPOINT.REPORTS, {
      params: {
        id: SOURCES.REPORTS.LIST_REPORT_ID,
        // nlist: SOURCES.REPORTS.LIST_REPORT_ALL,
      }
    }).pipe(map(response => parseXmlToJson(response.data)))
  }

  fetchOne(detailsWikiDto: DetailsWikiDto): Observable<AxiosResponse<unknown>> {
    return this.httpService.get(SOURCES.ENDPOINT.API, {
      params: {
        title: detailsWikiDto.title,
      }
    }).pipe(map(response => parseXmlToJson(response.data)))
  }

  search(searchWikiDto: SearchWikiDto): Observable<AxiosResponse<unknown>> {
    return this.httpService.get(SOURCES.ENDPOINT.API, {
      params: { title: `~${searchWikiDto.search}` }
    }).pipe(map(response => parseXmlToJson(response.data)))
  }
}
