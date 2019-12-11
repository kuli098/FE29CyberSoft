import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-lifecycle',
  templateUrl: './demo-lifecycle.component.html',
  styleUrls: ['./demo-lifecycle.component.scss']
})
export class DemoLifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
