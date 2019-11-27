import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtDetailItemComponent } from './bt-detail-item.component';

describe('BtDetailItemComponent', () => {
  let component: BtDetailItemComponent;
  let fixture: ComponentFixture<BtDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
