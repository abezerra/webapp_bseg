import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailListEditComponent } from './mail-list-edit.component';

describe('MailListEditComponent', () => {
  let component: MailListEditComponent;
  let fixture: ComponentFixture<MailListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
