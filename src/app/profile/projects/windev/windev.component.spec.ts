import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindevComponent } from './windev.component';

describe('WindevComponent', () => {
  let component: WindevComponent;
  let fixture: ComponentFixture<WindevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
