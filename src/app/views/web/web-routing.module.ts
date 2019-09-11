import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';

const routes: Routes = [
  { path: '', component: WebComponent,
  children : [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: 'src/app/feature/dashboard/dashboard.module#DashboardModule' },
    { path: 'listpage', loadChildren: 'src/app/feature/listpage/listpage.module#ListpageModule' },
    { path: 'addtask', loadChildren: 'src/app/feature/addtask/addtask.module#AddtaskModule' },
    { path: 'edittask', loadChildren: 'src/app/feature/edittask/edittask.module#EdittaskModule' },
    { path: 'viewtask', loadChildren: 'src/app/feature/viewtask/viewtask.module#ViewtaskModule' }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
