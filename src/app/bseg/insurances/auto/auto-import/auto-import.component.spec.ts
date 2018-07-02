import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoImportComponent } from './auto-import.component';

describe('AutoImportComponent', () => {
  let component: AutoImportComponent;
  let fixture: ComponentFixture<AutoImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
