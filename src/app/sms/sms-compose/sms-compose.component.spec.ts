import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsComposeComponent } from './sms-compose.component';

describe('SmsComposeComponent', () => {
  let component: SmsComposeComponent;
  let fixture: ComponentFixture<SmsComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsComposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
