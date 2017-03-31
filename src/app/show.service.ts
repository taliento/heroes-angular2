import { Injectable } from '@angular/core';

import { Show } from './show';
import { SHOWS } from './mock-shows';

@Injectable()
export class ShowService {
  getShows(): Promise<Show[]> {
    return Promise.resolve(SHOWS);
  }
  getShow(id: number): Promise<Show> {
    return this.getShows().then(heroes => heroes.find(hero => hero.id === id));
  }
}
