import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserGateway } from "src/app/gateways/user.gayway";
import { UserServiceService } from "src/app/Services/user-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  constructor(
    private _userGateway: UserGateway,
    private _userService: UserServiceService,
    private _router: Router
  ) {}

  ngOnInit() {}
  signinHandler(formSignin: NgForm): void {
    this._userGateway.Signin(formSignin.form.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("credentials", JSON.stringify(res));
        this._userService.setCredential(res);
        this._router.navigate(["/"]);
      },
      err => {
        console.log(err.error);
      }
    );
  }
}
