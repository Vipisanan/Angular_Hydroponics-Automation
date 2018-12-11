import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Mqttflora } from './models/mqttflora';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private url ="http://senz-flora.herokuapp.com/de";

  constructor(private _httpClient : HttpClient) { }

  getData() : Observable<Mqttflora[]>{
    return this._httpClient.get<Mqttflora[]>(this.url)
    .pipe(
      tap(_ => console.log('fetched graph data')),
      catchError(this.handleError('getGraphData', []))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
