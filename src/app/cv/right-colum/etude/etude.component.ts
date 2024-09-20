import { Component, Input} from '@angular/core';
import CVData from '../../cv';
@Component({
  selector: 'app-etude',
  templateUrl: './etude.component.html',
  styleUrls: ['./etude.component.scss']
})
export class EtudeComponent {
  @Input() cvetude! : CVData ;
}
