import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailTemplatesBreadcumbsComponent } from './mail-templates-breadcumbs.component';

describe('MailTemplatesBreadcumbsComponent', () => {
  let component: MailTemplatesBreadcumbsComponent;
  let fixture: ComponentFixture<MailTemplatesBreadcumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailTemplatesBreadcumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailTemplatesBreadcumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
