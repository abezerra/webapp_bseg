import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailListCreateComponent } from './mail-list-create.component';

describe('MailListCreateComponent', () => {
  let component: MailListCreateComponent;
  let fixture: ComponentFixture<MailListCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailListCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailListCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
