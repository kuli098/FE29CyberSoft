import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { BaiTapLoginDirectiveComponent } from './bai-tap-login-directive/bai-tap-login-directive.component';
import { BaiTapQlspComponent } from './bai-tap-qlsp/bai-tap-qlsp.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [DemoDirectiveComponent, BaiTapLoginDirectiveComponent, BaiTapQlspComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
  ],
  exports: [DemoDirectiveComponent, BaiTapLoginDirectiveComponent, BaiTapQlspComponent]
})
export class DirectiveModule { }
