import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Playoff } from '../playoff';
import { Prediction } from '../prediction';
import { Observable } from 'rxjs/Observable';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
  providers: [ApiService]
})
export class SerieComponent {  
  @Input() serie: Serie;
  @Input() prediction: Prediction;
  @Input() roundNumber: number;
  @Input() displayModeOnly: boolean;
  @Input() idUser: number;

  constructor(
    private apiService: ApiService
  ) {
  }

  public serieIsInProgess() {
    return this.serie.matchupTeams[0].seriesRecord.wins < 4 && this.serie.matchupTeams[0].seriesRecord.losses < 4
  }  

  public getScore() {
    var score = 0;
    if (this.prediction) {
      score = this.prediction.score;
    }
    return score;
  }

  public getDate(date: string) {
    return new Date(date);
  }

  
}
