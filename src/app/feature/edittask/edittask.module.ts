import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdittaskRoutingModule } from './edittask-routing.module';
import { EdittaskComponent } from './edittask/edittask.component';

@NgModule({
  imports: [
    CommonModule,
    EdittaskRoutingModule
  ],
  declarations: [EdittaskComponent]
})
export class EdittaskModule { }
