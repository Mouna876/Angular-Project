import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpdfComponent } from './getpdf.component';

describe('GetpdfComponent', () => {
  let component: GetpdfComponent;
  let fixture: ComponentFixture<GetpdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetpdfComponent]
    });
    fixture = TestBed.createComponent(GetpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
