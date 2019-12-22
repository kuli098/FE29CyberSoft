import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SignupIndexComponent } from "./signup-index/signup-index.component";

const SignupRouting: Routes = [{ path: "", component: SignupIndexComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(SignupRouting)]
})
export class SignupRoutingModule {}
