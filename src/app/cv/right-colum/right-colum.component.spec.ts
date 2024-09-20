import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightColumComponent } from './right-colum.component';

describe('RightColumComponent', () => {
  let component: RightColumComponent;
  let fixture: ComponentFixture<RightColumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightColumComponent]
    });
    fixture = TestBed.createComponent(RightColumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
