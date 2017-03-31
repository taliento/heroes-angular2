import { Component, OnInit } from '@angular/core';

import { Show } from '../shows/shared/show'
import { ShowService } from '../shows/shared/show.service';
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
