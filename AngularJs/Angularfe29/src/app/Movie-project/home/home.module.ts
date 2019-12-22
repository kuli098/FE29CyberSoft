import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { MovieComponent } from "./movie/movie.component";
import { HomeRoutingModule } from "./home-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HomeComponent, MovieComponent],
  imports: [CommonModule, HomeRoutingModule, RouterModule],
  exports: [HomeComponent, MovieComponent]
})
export class HomeModule {}
