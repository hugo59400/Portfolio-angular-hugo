import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestioleComponent } from './bestiole.component';

describe('XrayComponent', () => {
  let component: BestioleComponent;
  let fixture: ComponentFixture<BestioleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestioleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestioleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
