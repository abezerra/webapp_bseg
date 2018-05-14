import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailTemplatesShowComponent } from './mail-templates-show.component';

describe('MailTemplatesShowComponent', () => {
  let component: MailTemplatesShowComponent;
  let fixture: ComponentFixture<MailTemplatesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailTemplatesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailTemplatesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
