import { Component, Input } from '@angular/core';
import CVData from '../cv';

@Component({
  selector: 'app-right-colum',
  templateUrl: './right-colum.component.html',
  styleUrls: ['./right-colum.component.scss']
})
export class RightColumComponent {
 @Input() cvRight! : CVData 
}
