import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsSidebarComponent } from './sms-sidebar.component';

describe('SmsSidebarComponent', () => {
  let component: SmsSidebarComponent;
  let fixture: ComponentFixture<SmsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
