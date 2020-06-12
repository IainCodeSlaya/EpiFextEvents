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
import { AddemployeeComponent } from './addguesttolist/addemployee/addemployee.component';
import { AddvisitorComponent } from './addguesttolist/addvisitor/addvisitor.component';
import { AdddepartmentComponent } from './addguesttolist/adddepartment/adddepartment.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';


@NgModule({
  declarations: [
    AppComponent,
    CreateeventComponent,
    CalendarComponent,
    ScheduleeventactivityComponent,
    AddguesttolistComponent,
    AdddepartmentComponent,
    AddemployeeComponent,
    AddvisitorComponent
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
    FlatpickrModule
  ],
  entryComponents: [
    ScheduleeventactivityComponent,
    AddguesttolistComponent,
    AdddepartmentComponent,
    AddemployeeComponent,
    AddvisitorComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
