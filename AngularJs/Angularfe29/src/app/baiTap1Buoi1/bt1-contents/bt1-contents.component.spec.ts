import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt1ContentsComponent } from './bt1-contents.component';

describe('Bt1ContentsComponent', () => {
  let component: Bt1ContentsComponent;
  let fixture: ComponentFixture<Bt1ContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt1ContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt1ContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
