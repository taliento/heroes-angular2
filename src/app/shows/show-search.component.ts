import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ShowSearchService } from './shared/show-search.service';
import { Show } from './shared/show';

@Component({
  selector: 'show-search',
  templateUrl: './show-search.component.html',
  styleUrls: [ './show-search.component.css' ],
  providers: [ShowSearchService]
})
export class ShowSearchComponent implements OnInit {

  shows: Observable<Show[]>;
  private searchTerms = new Subject<string>();

  constructor(private showSearchService: ShowSearchService, private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.shows = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.showSearchService.search(term)
        // or the observable of empty shows if there was no search term
        : Observable.of<Show[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Show[]>([]);
      });
  }

  gotoDetail(show: Show): void {
    let link = ['/detail', show.id];
    this.router.navigate(link);
  }
}
