import { Component, Input } from '@angular/core';
import CVData from '../../cv';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 @Input() cvheader! : CVData ;
}
