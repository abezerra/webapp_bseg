import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsListsListComponent } from './sms-lists-list.component';

describe('SmsListsListComponent', () => {
  let component: SmsListsListComponent;
  let fixture: ComponentFixture<SmsListsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsListsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsListsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
