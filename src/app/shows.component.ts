import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Show } from './show';
import { ShowService} from './show.service';

@Component({
  selector: 'my-shows',
  templateUrl: './shows.component.html',
  styleUrls: [ './shows.component.css' ]
})

export class ShowsComponent implements OnInit  {

  shows: Show[];
  selectedShow: Show;

  constructor(private showService: ShowService, private router: Router) {}

  ngOnInit(): void {//called on component init
    this.getShows();
  }

  getShows(): void {
    this.showService.getShows().then(shows => this.shows = shows);
  }

  onSelect(show: Show): void {
    this.selectedShow = show;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedShow.id]);
  }
}
