import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplatesEditComponent } from './sms-templates-edit.component';

describe('SmsTemplatesEditComponent', () => {
  let component: SmsTemplatesEditComponent;
  let fixture: ComponentFixture<SmsTemplatesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsTemplatesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplatesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
