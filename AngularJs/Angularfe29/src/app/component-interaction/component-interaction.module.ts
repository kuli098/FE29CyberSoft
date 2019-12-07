import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoInteractionComponent } from './demo-interaction/demo-interaction.component';
import { StudentItemComponent } from './student-item/student-item.component';



@NgModule({
  declarations: [DemoInteractionComponent, StudentItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DemoInteractionComponent
  ]
})
export class ComponentInteractionModule { }
