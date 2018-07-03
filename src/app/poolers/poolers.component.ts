import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';
import { Pooler } from './pooler';
import { Playoff } from '../playoff';

@Component({
  selector: 'app-poolers',
  templateUrl: './poolers.component.html',
  styleUrls: ['./poolers.component.css'],
  providers: [ApiService]
})
export class PoolersComponent {
  title = 'Ranks';
  poolers: Pooler[];
  playoff: Playoff;

  constructor(
    private apiService: ApiService
  ) {
  }

  public ngOnInit() {
    this.apiService
      .getPlayoff()
      .subscribe(
        (playoff) => {
          this.playoff = playoff;
        }
      );
    this.apiService
      .getPoolers()
      .subscribe(
        (poolers) => {
          this.poolers = poolers;
        }
      );
  }

}
