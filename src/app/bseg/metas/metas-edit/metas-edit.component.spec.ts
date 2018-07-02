import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasEditComponent } from './metas-edit.component';

describe('MetasEditComponent', () => {
  let component: MetasEditComponent;
  let fixture: ComponentFixture<MetasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
