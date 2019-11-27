import { NgModule } from '@angular/core';
import { BtDetailComponent } from './bt-detail/bt-detail.component';
import { BtContentComponent } from './bt-content/bt-content.component';
import { BtDetailItemComponent } from './bt-detail-item/bt-detail-item.component';
@NgModule({
    //danh sach component do module nay quan ly
    declarations: [
        BtDetailComponent,
        BtContentComponent,
        BtDetailItemComponent
    ],
    // danh sach nhung module gan vao de su dung
    imports: [],
    exports: [BtDetailComponent]
})

export class DetailModule { }