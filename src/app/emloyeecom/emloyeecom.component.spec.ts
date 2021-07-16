import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmloyeecomComponent } from './emloyeecom.component';

describe('EmloyeecomComponent', () => {
  let component: EmloyeecomComponent;
  let fixture: ComponentFixture<EmloyeecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmloyeecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmloyeecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
