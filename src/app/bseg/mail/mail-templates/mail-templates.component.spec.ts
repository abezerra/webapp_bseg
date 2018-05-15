import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailTemplatesComponent } from './mail-templates.component';

describe('MailTemplatesComponent', () => {
  let component: MailTemplatesComponent;
  let fixture: ComponentFixture<MailTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});