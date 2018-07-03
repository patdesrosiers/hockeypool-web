import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [ApiService]
})
export class SignInComponent {

  constructor(
    private apiService: ApiService
  ) {
  }
}
