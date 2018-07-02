import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasCreateComponent } from './metas-create.component';

describe('MetasCreateComponent', () => {
  let component: MetasCreateComponent;
  let fixture: ComponentFixture<MetasCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
