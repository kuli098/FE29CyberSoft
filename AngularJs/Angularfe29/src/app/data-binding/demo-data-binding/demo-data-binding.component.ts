import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-data-binding',
  templateUrl: './demo-data-binding.component.html',
  styleUrls: ['./demo-data-binding.component.scss']
})
export class DemoDataBindingComponent implements OnInit {
  name: string = "nhan Nguyen";
  constructor() { }

  ngOnInit() { }
  showMessage(): void{
    alert('demo event binding')
  }

}
