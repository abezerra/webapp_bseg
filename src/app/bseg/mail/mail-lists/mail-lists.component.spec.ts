import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailListsComponent } from './mail-lists.component';

describe('MailListsComponent', () => {
  let component: MailListsComponent;
  let fixture: ComponentFixture<MailListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
