import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailTemplatesCreateComponent } from './mail-templates-create.component';

describe('MailTemplatesCreateComponent', () => {
  let component: MailTemplatesCreateComponent;
  let fixture: ComponentFixture<MailTemplatesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailTemplatesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailTemplatesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
