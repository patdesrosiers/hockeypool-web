import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import { Round } from '../round';
import { Pooler } from '../poolers/pooler';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent {
  title = 'Round';
  @Input() rounds: Round[];
  @Input() displayModeOnly: boolean;
  @Input() pooler: Pooler;

}
