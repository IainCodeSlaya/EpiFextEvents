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
    HttpClientModule
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
