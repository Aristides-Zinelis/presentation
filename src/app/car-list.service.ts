import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from, interval} from 'rxjs';
import { catchError,debounceTime} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarListService {

  masterURL = "../assets/cars.json";
 detailURL = "../assets/car";

  constructor(private http: HttpClient) { }

  getCars(): Observable<any>{
    return this.http.get(this.masterURL);
  }

  getCarDetails(car: string): Observable<any>{
    // console.log(car);
    return this.http.get(this.detailURL + car + ".json");


  }


  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.log(error);

    return of(result as T);
  };
}
}
