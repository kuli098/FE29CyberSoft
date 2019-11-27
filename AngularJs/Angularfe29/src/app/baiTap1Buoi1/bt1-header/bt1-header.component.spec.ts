import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt1HeaderComponent } from './bt1-header.component';

describe('Bt1HeaderComponent', () => {
  let component: Bt1HeaderComponent;
  let fixture: ComponentFixture<Bt1HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt1HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
