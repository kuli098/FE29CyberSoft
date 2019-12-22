import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const HomeRouting: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(HomeRouting)]
})
export class HomeRoutingModule {}
