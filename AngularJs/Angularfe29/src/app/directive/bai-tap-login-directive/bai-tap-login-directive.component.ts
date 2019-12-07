import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-login-directive',
  templateUrl: './bai-tap-login-directive.component.html',
  styleUrls: ['./bai-tap-login-directive.component.scss']
})
export class BaiTapLoginDirectiveComponent implements OnInit {
  name: string;
  isLogin = false;
  constructor() { }

  ngOnInit() {
  }

  loginHandler(username: string, password: string) {
    if (username === "cybersoft" && password === "cybersoft") {
      this.isLogin = true;
      this.name= username;
      return;
    }
    alert('username or password is incorrect.')
  }
}
