import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplatesCreateComponent } from './sms-templates-create.component';

describe('SmsTemplatesCreateComponent', () => {
  let component: SmsTemplatesCreateComponent;
  let fixture: ComponentFixture<SmsTemplatesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsTemplatesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplatesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
