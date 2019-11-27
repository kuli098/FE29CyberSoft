import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDataBindingComponent } from './demo-data-binding/demo-data-binding.component';



@NgModule({
  declarations: [DemoDataBindingComponent],
  imports: [
    CommonModule
  ],
  exports:[DemoDataBindingComponent]
})
export class DataBindingModule { }
