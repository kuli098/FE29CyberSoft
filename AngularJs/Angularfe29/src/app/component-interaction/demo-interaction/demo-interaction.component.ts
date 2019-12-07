import { Component, OnInit, ɵNO_CHANGE } from '@angular/core';

@Component({
  selector: 'app-demo-interaction',
  templateUrl: './demo-interaction.component.html',
  styleUrls: ['./demo-interaction.component.scss']
})
export class DemoInteractionComponent implements OnInit {
  studentArr: { name: string, age: number, classname: string }[] = [
    { name: "Nhan", age: 21, classname: "8A" },
    { name: "Vinh", age: 20, classname: "8B" },
    { name: "Phat", age: 22, classname: "8C" }
  ];
  choosenStudent: { name: string, age: number, classname: string };
  constructor() { }

  ngOnInit() { }
  outputStudentHandler(event): void {
    // console.log(event);
    this.choosenStudent = event;
  }

}
