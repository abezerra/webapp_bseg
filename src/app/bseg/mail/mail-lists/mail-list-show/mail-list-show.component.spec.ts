import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailListShowComponent } from './mail-list-show.component';

describe('MailListShowComponent', () => {
  let component: MailListShowComponent;
  let fixture: ComponentFixture<MailListShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailListShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailListShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
