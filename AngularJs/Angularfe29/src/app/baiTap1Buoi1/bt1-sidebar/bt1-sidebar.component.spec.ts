import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt1SidebarComponent } from './bt1-sidebar.component';

describe('Bt1SidebarComponent', () => {
  let component: Bt1SidebarComponent;
  let fixture: ComponentFixture<Bt1SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt1SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt1SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
