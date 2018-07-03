// import { Component, Input } from '@angular/core';
// import { ApiService } from '../api.service';
// import { Playoff } from '../playoff';
// import { Prediction } from '../prediction';
// import { Observable } from 'rxjs/Observable';
// import { Serie } from '../serie';
// import { Pooler } from '../poolers/pooler';

// @Component({
//   selector: 'app-playoff',
//   templateUrl: './playoff.component.html',
//   styleUrls: ['./playoff.component.css'],
//   providers: [ApiService]
// })
// export class PlayoffComponent {
//   title = '2018 Stanley Cup Playoff';
//   playoff: Playoff;
//   @Input() pooler: Pooler;
//   @Input() displayModeOnly: boolean;

//   constructor(
//     private apiService: ApiService
//   ) {
//   }

//   public ngOnInit() {
//     this.apiService
//       .getPlayoff()
//       .subscribe(
//         (playoff) => {
//           this.playoff = playoff;
//         }
//       );
//   }

//   public getPrediction(roundNumber: number, serieNumber: number) {
//     if (this.pooler.predictions) {
//       return this.pooler.predictions.find(p => p.roundNumber == roundNumber && p.serieNumber == serieNumber);
//     }
//   }

// }
