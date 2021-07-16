import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentcomComponent } from './departmentcom.component';

describe('DepartmentcomComponent', () => {
  let component: DepartmentcomComponent;
  let fixture: ComponentFixture<DepartmentcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
