import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

//custom modules
import { ShowDetailComponent } from './shows/show/show-detail.component';
import { ShowsComponent } from './shows/shows.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowSearchComponent } from './shows/show-search.component';

//services
import { ShowService } from './shows/shared/show.service';

//routing
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './test/in-memory-data.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ShowDetailComponent,
    ShowsComponent,
    ShowSearchComponent
  ],
  providers:    [
     ShowService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
