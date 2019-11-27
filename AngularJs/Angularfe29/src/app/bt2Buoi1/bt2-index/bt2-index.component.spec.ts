import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2IndexComponent } from './bt2-index.component';

describe('Bt2IndexComponent', () => {
  let component: Bt2IndexComponent;
  let fixture: ComponentFixture<Bt2IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
