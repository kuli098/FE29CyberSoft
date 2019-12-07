import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demoComponent/demo.component';
import { Bt1HeaderComponent } from './baiTap1Buoi1/bt1-header/bt1-header.component';
import { Bt1ContentsComponent } from './baiTap1Buoi1/bt1-contents/bt1-contents.component';
import { Bt1SidebarComponent } from './baiTap1Buoi1/bt1-sidebar/bt1-sidebar.component';
import { Bt1FooterComponent } from './baiTap1Buoi1/bt1-footer/bt1-footer.component';
import { Bt1IndexComponent } from './baiTap1Buoi1/bt1-index/bt1-index.component';
import { Bt2HeaderComponent } from './bt2Buoi1/bt2-header/bt2-header.component';
import { Bt2IndexComponent } from './bt2Buoi1/bt2-index/bt2-index.component';
import { Bt2CarouselComponent } from './bt2Buoi1/bt2-carousel/bt2-carousel.component';
import { Bt2ContentComponent } from './bt2Buoi1/bt2-content/bt2-content.component';
import { Bt2cardComponent } from './bt2Buoi1/bt2card/bt2card.component';
import { Bt2FooterComponent } from './bt2Buoi1/bt2-footer/bt2-footer.component';
import { DetailModule } from './detail/detail.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DirectiveModule } from './directive/directive.module';
import { ComponentInteractionModule } from './component-interaction/component-interaction.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Bt1HeaderComponent,
    Bt1ContentsComponent,
    Bt1SidebarComponent,
    Bt1FooterComponent,
    Bt1IndexComponent,
    Bt2HeaderComponent,
    Bt2IndexComponent,
    Bt2CarouselComponent,
    Bt2ContentComponent,
    Bt2cardComponent,
    Bt2FooterComponent,
  ],
  imports: [
    BrowserModule,
    DetailModule,
    DataBindingModule,
    DirectiveModule,
    ComponentInteractionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
