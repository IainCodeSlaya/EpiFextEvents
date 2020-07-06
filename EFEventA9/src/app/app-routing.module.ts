import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateeventComponent } from './createevent/createevent.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleeventactivityComponent } from './scheduleeventactivity/scheduleeventactivity.component';
import { AddguesttolistComponent } from './addguesttolist/addguesttolist.component';
import { ModaltestComponent } from './modaltest/modaltest.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { ViewexternalmeetingComponent } from './viewexternalmeeting/viewexternalmeeting.component';
import { RsvptoeventComponent } from './rsvptoevent/rsvptoevent.component';
import { SelecttimeslotComponent } from './selecttimeslot/selecttimeslot.component';
import { BookmeetingComponent } from './bookmeeting/bookmeeting.component';


const routes: Routes = [
  {path: '', redirectTo: 'timeslot', pathMatch: 'full'},
  {path: 'createevent', component: CreateeventComponent},
  {path: 'scheduleactivity', component: ScheduleeventactivityComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'addguesttolist', component: AddguesttolistComponent},
  {path: 'modal', component: ModaltestComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signout', component: SignoutComponent},
  {path: 'viewmeet', component: ViewexternalmeetingComponent},
  {path: 'rsvp', component: RsvptoeventComponent},
  {path: 'timeslot', component: SelecttimeslotComponent},
  {path: 'bookmeeting', component: BookmeetingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
