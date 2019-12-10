import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheItemComponent } from './ghe-item/ghe-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DanhSachGheComponent, GheItemComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DanhSachGheComponent,
    GheItemComponent
  ]
})
export class DatGheXeBusModule { }
