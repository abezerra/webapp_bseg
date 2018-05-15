import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplatesBreadcumbsComponent } from './sms-templates-breadcumbs.component';

describe('SmsTemplatesBreadcumbsComponent', () => {
  let component: SmsTemplatesBreadcumbsComponent;
  let fixture: ComponentFixture<SmsTemplatesBreadcumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsTemplatesBreadcumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplatesBreadcumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
