import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt1IndexComponent } from './bt1-index.component';

describe('Bt1IndexComponent', () => {
  let component: Bt1IndexComponent;
  let fixture: ComponentFixture<Bt1IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt1IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt1IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
