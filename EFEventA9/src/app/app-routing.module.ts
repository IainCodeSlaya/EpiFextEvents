import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateeventComponent } from './createevent/createevent.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleeventactivityComponent } from './scheduleeventactivity/scheduleeventactivity.component';
import { AddguesttolistComponent } from './addguesttolist/addguesttolist.component';


const routes: Routes = [
  {path: '', redirectTo: 'createevent', pathMatch: 'full'},
  {path: 'createevent', component: CreateeventComponent},
  {path: 'scheduleactivity', component: ScheduleeventactivityComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'addguesttolist', component: AddguesttolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
