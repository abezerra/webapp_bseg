import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsListsEditComponent } from './sms-lists-edit.component';

describe('SmsListsEditComponent', () => {
  let component: SmsListsEditComponent;
  let fixture: ComponentFixture<SmsListsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsListsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsListsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
