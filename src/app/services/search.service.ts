import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { GoogleSearchItem } from '../models/google-search';
@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getResult(query: string) {
    return this.http.get<GoogleSearchItem[]>('http://localhost:3000/search?keyword=' + query);
  }

}
