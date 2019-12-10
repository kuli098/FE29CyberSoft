import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {
  @Input() studentItem: { name: string, age: number, classname: string };
  @Output() studentEmitter = new EventEmitter()
  constructor() { }

  ngOnInit() { }

  chooseStudent(): void {
    this.studentEmitter.emit(this.studentItem);
  }
}
