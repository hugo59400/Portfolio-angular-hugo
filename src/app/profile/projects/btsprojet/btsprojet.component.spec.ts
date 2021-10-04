import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsProjetComponent } from './btsprojet.component';

describe('BtsProjetComponent', () => {
  let component: BtsProjetComponent;
  let fixture: ComponentFixture<BtsProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtsProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtsProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
