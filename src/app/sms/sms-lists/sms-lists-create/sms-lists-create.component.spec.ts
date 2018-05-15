import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsListsCreateComponent } from './sms-lists-create.component';

describe('SmsListsCreateComponent', () => {
  let component: SmsListsCreateComponent;
  let fixture: ComponentFixture<SmsListsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsListsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsListsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
