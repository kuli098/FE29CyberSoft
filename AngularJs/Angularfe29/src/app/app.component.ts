import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "./Services/user-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private _userService: UserServiceService) {}
  title = "Angularfe29";
  ngOnInit() {
    const credntialsString = localStorage.getItem("credentials");
    if (credntialsString) {
      this._userService.setCredential(JSON.parse(credntialsString));
    }
  }
}
