import { Component, Input } from '@angular/core';
import CVData from './cv';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { updateCv } from '../store/cv.actions';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  cvStore$!: Observable<CVData>;
  cvInit: CVData = {
    nom: "",
    prenom: "",
    telephone: "",
    email: '',
  };
  constructor(private store: Store<{ cvStore: CVData }>){
    this.cvStore$ = store.select('cvStore');
  };
  UpdateCv(){
    this.store.dispatch(updateCv({cv : {
      nom: "mouna",
      prenom: "zouari",
      telephone: "25555555",
      email: '',
    }}));
  };

    };
    console.log();

    


