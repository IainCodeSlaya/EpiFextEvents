import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateeventComponent } from './createevent/createevent.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleeventactivityComponent } from './scheduleeventactivity/scheduleeventactivity.component';
import { AddguesttolistComponent } from './addguesttolist/addguesttolist.component';
import { ModaltestComponent } from './modaltest/modaltest.component';


const routes: Routes = [
  {path: '', redirectTo: 'modal', pathMatch: 'full'},
  {path: 'createevent', component: CreateeventComponent},
  {path: 'scheduleactivity', component: ScheduleeventactivityComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'addguesttolist', component: AddguesttolistComponent},
  {path: 'modal', component: ModaltestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
