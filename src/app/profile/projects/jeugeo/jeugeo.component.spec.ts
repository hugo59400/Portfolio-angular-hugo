import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeugeoComponent } from './jeugeo.component';

describe('JeugeoComponent', () => {
  let component: JeugeoComponent;
  let fixture: ComponentFixture<JeugeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeugeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeugeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
