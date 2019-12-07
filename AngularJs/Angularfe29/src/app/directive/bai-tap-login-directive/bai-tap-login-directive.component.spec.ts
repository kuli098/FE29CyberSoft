import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapLoginDirectiveComponent } from './bai-tap-login-directive.component';

describe('BaiTapLoginDirectiveComponent', () => {
  let component: BaiTapLoginDirectiveComponent;
  let fixture: ComponentFixture<BaiTapLoginDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapLoginDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapLoginDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
