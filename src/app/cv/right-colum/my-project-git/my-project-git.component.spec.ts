import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectGitComponent } from './my-project-git.component';

describe('MyProjectGitComponent', () => {
  let component: MyProjectGitComponent;
  let fixture: ComponentFixture<MyProjectGitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProjectGitComponent]
    });
    fixture = TestBed.createComponent(MyProjectGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
