import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewtaskComponent } from './viewtask/viewtask.component';

const routes: Routes = [
  { path: '', component: ViewtaskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewtaskRoutingModule { }
