import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasBreadcumbsComponent } from './metas-breadcumbs.component';

describe('MetasBreadcumbsComponent', () => {
  let component: MetasBreadcumbsComponent;
  let fixture: ComponentFixture<MetasBreadcumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasBreadcumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasBreadcumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
