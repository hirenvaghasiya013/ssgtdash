import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListpageModule } from './app-listpage.module';
import { LispageComponent } from './lispage.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppListpageModule,
    SharedModule
  ],
  declarations: [ LispageComponent ]
})
export class ListpageModule { }
