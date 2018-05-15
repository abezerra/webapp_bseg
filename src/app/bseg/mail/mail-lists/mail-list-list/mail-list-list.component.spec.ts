import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailListListComponent } from './mail-list-list.component';

describe('MailListListComponent', () => {
  let component: MailListListComponent;
  let fixture: ComponentFixture<MailListListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailListListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
