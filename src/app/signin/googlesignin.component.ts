import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-googlesignin',
  templateUrl: './googlesignin.component.html',
  styleUrls: ['./googlesignin.component.css'],
  providers: [ApiService]
})
export class GoogleSignInComponent {

  constructor(
    private apiService: ApiService
  ) {
  }

  public onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

}
