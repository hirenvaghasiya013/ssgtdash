import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewtaskRoutingModule } from './viewtask-routing.module';
import { ViewtaskComponent } from './viewtask/viewtask.component';

@NgModule({
  imports: [
    CommonModule,
    ViewtaskRoutingModule
  ],
  declarations: [ViewtaskComponent]
})
export class ViewtaskModule { }
