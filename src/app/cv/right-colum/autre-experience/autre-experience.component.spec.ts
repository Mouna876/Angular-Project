import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreExperienceComponent } from './autre-experience.component';

describe('AutreExperienceComponent', () => {
  let component: AutreExperienceComponent;
  let fixture: ComponentFixture<AutreExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutreExperienceComponent]
    });
    fixture = TestBed.createComponent(AutreExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
