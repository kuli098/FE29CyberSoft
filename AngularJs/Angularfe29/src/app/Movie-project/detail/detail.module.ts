import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailIndexComponent } from "./detail-index/detail-index.component";
import { DetailRoutingModule } from "./detail-routing.module";

@NgModule({
  declarations: [DetailIndexComponent],
  imports: [CommonModule, DetailRoutingModule],
  exports: [DetailIndexComponent]
})
export class MovieDetailModule {}
