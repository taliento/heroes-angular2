import { Component, OnInit } from '@angular/core';

import { Show } from './show'
import { ShowService } from './show.service';
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
  shows: Show[];

  constructor(private showService: ShowService) {}

  ngOnInit(): void {
    this.showService.getShows().then(shows => this.shows = shows.slice(1,5))
  }
}
