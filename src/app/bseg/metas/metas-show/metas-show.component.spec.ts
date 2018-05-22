import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasShowComponent } from './metas-show.component';

describe('MetasShowComponent', () => {
  let component: MetasShowComponent;
  let fixture: ComponentFixture<MetasShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
