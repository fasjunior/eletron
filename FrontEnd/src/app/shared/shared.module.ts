import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import './utils/utils';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [],
  exports: [MaterialModule]
})
export class SharedModule { } 
