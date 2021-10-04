import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPortfolioComponent } from './htmlportfolio.component';

describe('HtmlPortfolioComponent', () => {
  let component: HtmlPortfolioComponent;
  let fixture: ComponentFixture<HtmlPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
