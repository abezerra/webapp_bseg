import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailBreadcumbsComponent } from './mail-breadcumbs.component';

describe('MailBreadcumbsComponent', () => {
  let component: MailBreadcumbsComponent;
  let fixture: ComponentFixture<MailBreadcumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailBreadcumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailBreadcumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
