import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDataBindingComponent } from './demo-data-binding/demo-data-binding.component';
import { FormsModule } from '@angular/forms';
import { BaiTapDataBindingComponent } from './bai-tap-data-binding/bai-tap-data-binding.component'



@NgModule({
  declarations: [DemoDataBindingComponent, BaiTapDataBindingComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DemoDataBindingComponent,BaiTapDataBindingComponent]
})
export class DataBindingModule { }
