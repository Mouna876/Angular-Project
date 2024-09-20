import { Component, Input } from '@angular/core';
import CVData from '../../cv';
@Component({
  selector: 'app-autre-experience',
  templateUrl: './autre-experience.component.html',
  styleUrls: ['./autre-experience.component.scss']
})
export class AutreExperienceComponent {
  @Input() cvexperience1? : CVData;
}
