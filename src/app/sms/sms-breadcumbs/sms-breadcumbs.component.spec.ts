import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsBreadcumbsComponent } from './sms-breadcumbs.component';

describe('SmsBreadcumbsComponent', () => {
  let component: SmsBreadcumbsComponent;
  let fixture: ComponentFixture<SmsBreadcumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsBreadcumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsBreadcumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
