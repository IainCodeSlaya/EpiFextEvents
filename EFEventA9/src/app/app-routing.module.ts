import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateeventComponent } from './createevent/createevent.component';


const routes: Routes = [
  {path: '', redirectTo: 'createevent', pathMatch: 'full'},
  {path: 'createevent', component: CreateeventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
