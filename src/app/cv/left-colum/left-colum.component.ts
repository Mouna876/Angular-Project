import { Component, Input } from '@angular/core';
import CVData from '../cv';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { updateCv } from '../../store/cv.actions';
@Component({
  selector: 'app-left-colum',
  templateUrl: './left-colum.component.html',
  styleUrls: ['./left-colum.component.scss']
})
export class LeftColumComponent {
  cvStore$!: Observable<CVData>;
 @Input() cvleft! : CVData ;
 styleBackround : string = 'red'
 constructor(private store: Store<{ cvStore: CVData }>){
  this.cvStore$ = store.select('cvStore');
};

}
