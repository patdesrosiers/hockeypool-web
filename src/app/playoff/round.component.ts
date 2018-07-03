import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import { Serie } from '../serie';
import { Round } from '../round';
import { Pooler } from '../poolers/pooler';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent {  
  @Input() round: Round;
  @Input() pooler: Pooler;
  @Input() displayModeOnly: boolean;

  public getPrediction(roundNumber: number, serieNumber: number) {
    if (this.pooler.predictions) {
      return this.pooler.predictions.find(p => p.roundNumber == roundNumber && p.serieNumber == serieNumber);
    }
  }
}
