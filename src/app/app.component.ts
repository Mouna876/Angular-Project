import { Component, HostListener } from '@angular/core';
import CVData from './cv/cv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv';
  
  cv !: CVData;
  createData(cv:CVData){
    console.log(cv)
    this.cv = cv;
  }
}
