import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsListsShowComponent } from './sms-lists-show.component';

describe('SmsListsShowComponent', () => {
  let component: SmsListsShowComponent;
  let fixture: ComponentFixture<SmsListsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsListsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsListsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
