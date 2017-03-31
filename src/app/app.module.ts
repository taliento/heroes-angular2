import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

//custom modules
import { ShowDetailComponent } from './show-detail.component';
import { ShowsComponent } from './shows.component';
import { DashboardComponent } from './dashboard.component';
import { ShowSearchComponent } from './show-search.component';

//services
import { ShowService } from './show.service';

//routing
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
