import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './components/demo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    SharedModule
  ],
  exports: [
    DemoComponent
  ]
})
export class DemoModule { }
