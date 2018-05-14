import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailListsBreadcumbsComponent } from './mail-lists-breadcumbs.component';

describe('MailListsBreadcumbsComponent', () => {
  let component: MailListsBreadcumbsComponent;
  let fixture: ComponentFixture<MailListsBreadcumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailListsBreadcumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailListsBreadcumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
