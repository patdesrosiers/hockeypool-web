import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PoolersComponent } from './poolers/poolers.component';
// import { PlayoffComponent } from './playoff/playoff.component';
import { PoolerComponent } from './poolers/pooler.component';
import { SerieComponent } from './playoff/serie.component';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app.routing.module';
import { PredictionComponent } from './playoff/prediction.component';
import { RoundsComponent } from './playoff/rounds.component';
import { RoundComponent } from './playoff/round.component';
import { SignInComponent } from './signin/signin.component';
import { GoogleSignInComponent } from './signin/googlesignin.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    GoogleSignInComponent,
    SignInComponent,
    PredictionComponent,
    RoundComponent,
    RoundsComponent,
    PoolerComponent,
    PoolersComponent,
    SerieComponent
  ],  
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

