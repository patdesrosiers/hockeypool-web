import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Prediction } from '../prediction';
import { Observable } from 'rxjs/Observable';
import { Serie } from '../serie';

@Component({
    selector: 'app-prediction',
    templateUrl: './prediction.component.html',
    styleUrls: ['./prediction.component.css'],
    providers: [ApiService]
})
export class PredictionComponent {
    @Input() prediction: Prediction;
    @Input() serie: Serie;
    @Input() roundNumber: number;
    @Input() displayModeOnly: boolean;
    @Input() idUser: number;
    formatedPrediction: string;

    constructor(
        private apiService: ApiService
    ) {
    }

    public ngOnInit() {
        
        if (!this.prediction) {
            if (!this.displayModeOnly) {
                this.prediction = new Prediction({ season: "20172018", roundNumber: this.roundNumber, serieNumber: this.serie.seriesNumber, idUser: this.idUser});
            }            
        }
        else {
            this.setFormatedPrediction();
        }

    }

    public setFormatedPrediction() {
        this.formatedPrediction = this.serie.matchupTeams.find(t => t.team.id == this.prediction.teamId).team.name + ' in ' + this.prediction.numberOfGames;
    }

    public canMakePrediction() {
        return !this.displayModeOnly && this.serieHasNotStarted();
    }

    private serieHasNotStarted() {
        return this.serie.matchupTeams[0].seriesRecord.wins == 0 && this.serie.matchupTeams[0].seriesRecord.losses == 0 &&
            new Date(this.serie.currentGame.seriesSummary.gameTime) > new Date();
    }

    public makePrediction() {        
        if (this.prediction.id) {
            this.apiService
                .changePrediction(this.prediction)
                .subscribe(
                    res => this.setFormatedPrediction()
                );
        }
        else {
            this.apiService
                .makePrediction(this.prediction)
                .subscribe(
                    res => this.setFormatedPrediction()
                );
        }
    }

}
