import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2cardComponent } from './bt2card.component';

describe('Bt2cardComponent', () => {
  let component: Bt2cardComponent;
  let fixture: ComponentFixture<Bt2cardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2cardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2cardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
