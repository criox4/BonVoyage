import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHeroComponent } from './homepage-hero.component';

describe('HomepageHeroComponent', () => {
  let component: HomepageHeroComponent;
  let fixture: ComponentFixture<HomepageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
