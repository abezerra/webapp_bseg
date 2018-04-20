import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUsersOnlineComponent } from './chat-users-online.component';

describe('ChatUsersOnlineComponent', () => {
  let component: ChatUsersOnlineComponent;
  let fixture: ComponentFixture<ChatUsersOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatUsersOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatUsersOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
