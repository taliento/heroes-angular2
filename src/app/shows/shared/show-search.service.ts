import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Show }           from './show';

@Injectable()
export class ShowSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Show[]> {
    return this.http
               .get(`app/shows/?name=${term}`)
               .map(response => response.json().data as Show[]);
  }

}
