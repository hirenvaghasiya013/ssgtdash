import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule
  ],
  declarations: [],
  exports: [
    ThemeModule
  ]
})
export class SharedModule { }
