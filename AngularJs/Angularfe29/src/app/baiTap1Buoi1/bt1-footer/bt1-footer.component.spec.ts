import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt1FooterComponent } from './bt1-footer.component';

describe('Bt1FooterComponent', () => {
  let component: Bt1FooterComponent;
  let fixture: ComponentFixture<Bt1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
