import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Show } from './show';
import { ShowService} from './show.service';

@Component({
  selector: 'show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: [ './show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  @Input() show: Show;

  constructor(private showService: ShowService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.showService.getShow(+params['id']))
    .subscribe(show => this.show = show);
  }

  goBack(): void {
    this.location.back();
  }
}
