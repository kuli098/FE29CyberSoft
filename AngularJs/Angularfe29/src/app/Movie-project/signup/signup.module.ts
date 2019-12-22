import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignupIndexComponent } from "./signup-index/signup-index.component";
import { FormsModule } from "@angular/forms";
import { SignupRoutingModule } from "./signup-routing.module";

@NgModule({
  declarations: [SignupIndexComponent],
  imports: [CommonModule, FormsModule, SignupRoutingModule],
  exports: [SignupIndexComponent]
})
export class SignupModule {}
