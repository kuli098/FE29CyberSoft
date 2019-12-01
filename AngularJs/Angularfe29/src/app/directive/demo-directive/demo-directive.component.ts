import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {
  isShowCybersoft = false;
  month: number;
  monthtArr: string[] = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4'];
  constructor() { }

  ngOnInit() {
  }
  changeMontHandler(event): void {
    this.month = event.target.value;
  }
}
