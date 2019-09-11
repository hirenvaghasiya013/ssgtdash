import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LispageComponent } from './lispage.component';

export const route: Routes = [
  { path: '', component: LispageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(route),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppListpageModule { }
