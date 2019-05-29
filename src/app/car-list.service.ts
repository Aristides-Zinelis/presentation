import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from, interval} from 'rxjs';
import { catchError,debounceTime} from 'rxjs/operators';
import {Car} from './car';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarListService {

  masterURL = "https://itg-prd-recruit.appspot.com/api/vehicles/";
  detailURL = "https://itg-prd-recruit.appspot.com/api/vehicle/";

  constructor(private http: HttpClient) { }

  getCars(): Observable<any>{
    return this.http.get(this.masterURL);
  }

  getCarDetails(car: Car): Observable<Car>{
    return this.http.get <Car>(this.detailURL + car.id);
  }

}
