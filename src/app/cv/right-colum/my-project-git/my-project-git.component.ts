import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import CVData from '../../cv';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-my-project-git',
  templateUrl: './my-project-git.component.html',
  styleUrls: ['./my-project-git.component.scss']
})
export class MyProjectGitComponent {

  cvStore$ : Observable<CVData>
  constructor(private store: Store<{ cvStore: CVData }>){
    this.cvStore$ = store.select('cvStore');
  };
}
