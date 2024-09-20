import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftColumComponent } from './left-colum.component';

describe('LeftColumComponent', () => {
  let component: LeftColumComponent;
  let fixture: ComponentFixture<LeftColumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftColumComponent]
    });
    fixture = TestBed.createComponent(LeftColumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
