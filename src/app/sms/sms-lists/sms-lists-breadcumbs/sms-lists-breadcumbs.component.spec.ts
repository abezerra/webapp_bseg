import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsListsBreadcumbsComponent } from './sms-lists-breadcumbs.component';

describe('SmsListsBreadcumbsComponent', () => {
  let component: SmsListsBreadcumbsComponent;
  let fixture: ComponentFixture<SmsListsBreadcumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsListsBreadcumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsListsBreadcumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
