import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtContentComponent } from './bt-content.component';

describe('BtContentComponent', () => {
  let component: BtContentComponent;
  let fixture: ComponentFixture<BtContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
