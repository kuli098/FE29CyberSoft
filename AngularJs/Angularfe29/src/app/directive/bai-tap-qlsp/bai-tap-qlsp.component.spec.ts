import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapQlspComponent } from './bai-tap-qlsp.component';

describe('BaiTapQlspComponent', () => {
  let component: BaiTapQlspComponent;
  let fixture: ComponentFixture<BaiTapQlspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapQlspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapQlspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
