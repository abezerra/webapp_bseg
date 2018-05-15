import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsInboxComponent } from './sms-inbox.component';

describe('SmsInboxComponent', () => {
  let component: SmsInboxComponent;
  let fixture: ComponentFixture<SmsInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
