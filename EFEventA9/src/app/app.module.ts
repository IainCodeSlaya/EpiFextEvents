import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateeventComponent } from './createevent/createevent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleeventactivityComponent } from './scheduleeventactivity/scheduleeventactivity.component';
import { AddguesttolistComponent } from './addguesttolist/addguesttolist.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ModaltestComponent } from './modaltest/modaltest.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { ViewexternalmeetingComponent } from './viewexternalmeeting/viewexternalmeeting.component';
import { RsvptoeventComponent } from './rsvptoevent/rsvptoevent.component';
import { FooterComponent } from './footer/footer.component';
import { SelecttimeslotComponent } from './selecttimeslot/selecttimeslot.component';
import { BookmeetingComponent } from './bookmeeting/bookmeeting.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateeventComponent,
    CalendarComponent,
    ScheduleeventactivityComponent,
    AddguesttolistComponent,
    SidenavComponent,
    ModaltestComponent,
    SigninComponent,
    SignoutComponent,
    ViewexternalmeetingComponent,
    RsvptoeventComponent,
    FooterComponent,
    SelecttimeslotComponent,
    BookmeetingComponent,
    AddEmployeeComponent,
    AddVisitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModule,
    NgbModalModule,
    FlatpickrModule,
    MDBBootstrapModule.forRoot()
  ],
  entryComponents: [
    ScheduleeventactivityComponent,
    AddguesttolistComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
