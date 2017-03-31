import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Show } from './show';

@Injectable()
export class ShowService {

  private showsUrl = 'api/shows';

  constructor (private http: Http) {}

  getShows(): Promise<Show[]> {
    return this.http.get(this.showsUrl)
               .toPromise()
               .then(response => response.json().data as Show[])
               .catch(this.handleError);
  }

  getShow(id: number): Promise<Show> {
    const url = `${this.showsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Show)
      .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(show: Show): Promise<Show> {
    const url = `${this.showsUrl}/${show.id}`;
    return this.http
      .put(url, JSON.stringify(show), {headers: this.headers})
      .toPromise()
      .then(() => show)
      .catch(this.handleError);
  }

  create(name: string): Promise<Show> {
    return this.http
      .post(this.showsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Show)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.showsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
