import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-data-binding',
  templateUrl: './demo-data-binding.component.html',
  styleUrls: ['./demo-data-binding.component.scss']
})
export class DemoDataBindingComponent implements OnInit {
  name: string = "nhan Nguyen";
  email: string;
  isDisabled = true;
  phoneNumber: string;

  constructor() { }

  ngOnInit() { }

  showMessage(): void {
    alert('demo event binding')
  }

  changeEmailHandler(event): void {
    this.email = event.target.value;
    console.log(this.email);
  }

  showUserName(username: string): void {
    alert(username)
  }
}
