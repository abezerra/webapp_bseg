import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplatesShowComponent } from './sms-templates-show.component';

describe('SmsTemplatesShowComponent', () => {
  let component: SmsTemplatesShowComponent;
  let fixture: ComponentFixture<SmsTemplatesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsTemplatesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplatesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
