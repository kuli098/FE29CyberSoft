import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoLifecycleComponent } from './demo-lifecycle/demo-lifecycle.component';



@NgModule({
  declarations: [DemoLifecycleComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DemoLifecycleComponent
  ]
})
export class DemoLifecycleModule { }
