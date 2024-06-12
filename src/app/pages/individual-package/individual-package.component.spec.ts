import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPackageComponent } from './individual-package.component';

describe('IndividualPackageComponent', () => {
  let component: IndividualPackageComponent;
  let fixture: ComponentFixture<IndividualPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
