import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtaskRoutingModule } from './addtask-routing.module';
import { AddtaskComponent } from './addtask/addtask.component';

@NgModule({
  imports: [
    CommonModule,
    AddtaskRoutingModule
  ],
  declarations: [AddtaskComponent]
})
export class AddtaskModule { }
