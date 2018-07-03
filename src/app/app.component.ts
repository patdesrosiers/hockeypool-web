import { Component } from '@angular/core';
import { Playoff } from './playoff';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pool Grant Desrosiers';
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
  }
}
