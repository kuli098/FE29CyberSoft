import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtDetailComponent } from './bt-detail.component';

describe('BtDetailComponent', () => {
  let component: BtDetailComponent;
  let fixture: ComponentFixture<BtDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
