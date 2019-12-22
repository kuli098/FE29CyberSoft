import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DetailIndexComponent } from "./detail-index/detail-index.component";

const DetailRouting: Routes = [{ path: "", component: DetailIndexComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(DetailRouting)]
})
export class DetailRoutingModule {}
