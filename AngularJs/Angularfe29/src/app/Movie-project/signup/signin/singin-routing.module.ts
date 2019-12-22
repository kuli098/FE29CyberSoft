import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";

const SigninRouting: Routes = [{ path: "", component: SigninComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(SigninRouting)]
})
export class SinginRoutingModule {}
