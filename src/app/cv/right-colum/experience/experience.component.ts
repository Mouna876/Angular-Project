import { Component, Input } from '@angular/core';
import CVData from '../../cv';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() cvexperience?: CVData ;
}
