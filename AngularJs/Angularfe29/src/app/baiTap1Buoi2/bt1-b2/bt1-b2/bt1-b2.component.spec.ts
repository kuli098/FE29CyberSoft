import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt1B2Component } from './bt1-b2.component';

describe('Bt1B2Component', () => {
  let component: Bt1B2Component;
  let fixture: ComponentFixture<Bt1B2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt1B2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt1B2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
