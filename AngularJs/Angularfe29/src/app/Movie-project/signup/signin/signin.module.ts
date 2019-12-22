import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule } from "@angular/forms";
import { SinginRoutingModule } from "./singin-routing.module";

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, FormsModule, SinginRoutingModule],
  exports: [SigninComponent]
})
export class SigninModule {}
