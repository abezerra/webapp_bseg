import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplatesListComponent } from './sms-templates-list.component';

describe('SmsTemplatesListComponent', () => {
  let component: SmsTemplatesListComponent;
  let fixture: ComponentFixture<SmsTemplatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsTemplatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
