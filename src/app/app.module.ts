import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';

//custom modules
import { ShowDetailComponent } from './show-detail.component';
import { ShowsComponent } from './shows.component';
import { DashboardComponent } from './dashboard.component';

//services
import { ShowService } from './show.service';

//routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ShowDetailComponent,
    ShowsComponent
  ],
  providers:    [
     ShowService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
