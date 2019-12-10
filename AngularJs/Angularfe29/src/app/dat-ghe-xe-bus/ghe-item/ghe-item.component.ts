import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISeat } from 'src/app/Services/seat';

@Component({
  selector: 'app-ghe-item',
  templateUrl: './ghe-item.component.html',
  styleUrls: ['./ghe-item.component.scss']
})
export class GheItemComponent implements OnInit {
  @Input('seat') seatItem: ISeat;
  @Output() seatEmiter = new EventEmitter;

  isBooking = false;
  constructor() { }

  ngOnInit() {
  }
  chooseSeat(): void {
    if (!this.seatItem.TrangThai) {
      this.isBooking = !this.isBooking;
    }
    this.seatEmiter.emit(this.seatItem)
  }
}
