import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserGateway } from "src/app/gateways/user.gayway";

@Component({
  selector: "app-signup-index",
  templateUrl: "./signup-index.component.html",
  styleUrls: ["./signup-index.component.scss"]
})
export class SignupIndexComponent implements OnInit {
  constructor(private _userGayway: UserGateway) {}

  ngOnInit() {}
  signupUserHandler(formSignup: NgForm) {
    const newUser = {
      ...formSignup.form.value,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang"
    };
    this._userGayway.Signup(newUser).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
