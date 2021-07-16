import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleformComponent } from './singleform.component';

describe('SingleformComponent', () => {
  let component: SingleformComponent;
  let fixture: ComponentFixture<SingleformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
