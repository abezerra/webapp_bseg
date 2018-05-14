import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailTemplatesEditComponent } from './mail-templates-edit.component';

describe('MailTemplatesEditComponent', () => {
  let component: MailTemplatesEditComponent;
  let fixture: ComponentFixture<MailTemplatesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailTemplatesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailTemplatesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
