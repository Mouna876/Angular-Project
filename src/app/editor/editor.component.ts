import { Component, HostListener } from '@angular/core';
import CVData from '../cv/cv';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  title = 'cv';
  innerWidth: any;
  hasShowCv : any = false;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
  cv !: CVData;
  createData(cv:CVData){
    console.log(cv)
    this.cv = cv;
  }
  showCv() {
    console.log( this.hasShowCv)
    this.hasShowCv = !this.hasShowCv 
  }

}


