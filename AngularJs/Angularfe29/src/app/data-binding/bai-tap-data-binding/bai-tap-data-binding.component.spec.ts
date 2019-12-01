import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapDataBindingComponent } from './bai-tap-data-binding.component';

describe('BaiTapDataBindingComponent', () => {
  let component: BaiTapDataBindingComponent;
  let fixture: ComponentFixture<BaiTapDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
