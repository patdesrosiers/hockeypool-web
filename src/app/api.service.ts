import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Playoff } from './playoff';
import { LiveGame } from './liveGame';
import { Prediction } from './prediction';
import { Pooler } from './poolers/pooler';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getPlayoff(): Observable<Playoff> {
    return this.http
      .get(API_URL + '/playoff')
      .map(response => {
        const jsonResponse = response.json();
        return new Playoff(jsonResponse);
      })
      .catch(this.handleError);
  }

  public getPredictions(idUser): Observable<Prediction[]> {
    return this.http
      .get(API_URL + '/predictions/' + idUser)
      .map(response => {
        const jsonResponse = response.json();
        return jsonResponse.map(pred => new Prediction(pred));
      })
      .catch(this.handleError);
  }

  public makePrediction(prediction: Prediction) {
    return this.http
      .post(API_URL + '/predictions', prediction)
      .catch(this.handleError);
  }

  public changePrediction(prediction: Prediction): Observable<Prediction> {
    return this.http
      .put(API_URL + '/predictions/' + prediction.id, prediction)
      .catch(this.handleError);
  }

  public getPoolers(): Observable<Pooler[]> {
    return this.http
      .get(API_URL + '/poolers')
      .map(response => {
        const jsonResponse = response.json();
        return jsonResponse.map(pooler => new Pooler(pooler));
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}