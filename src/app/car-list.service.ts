import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from, interval} from 'rxjs';
import { catchError,debounceTime, mergeMap } from 'rxjs/operators';

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
    return this.http.get(this.masterURL).pipe(

        mergeMap((car) =>  this.getCarDetails(car))
      );
       // this.getCarDetails(car).map(cars=>({cars, car}))
      // mergeAll();



        // mergeMap(car =>  this.http.get(this.detail + car.id)));
  }

  getCarDetails(car: Observable<any>): Observable<any>{
    console.log(car);
    return from(car).pipe(
      mergeMap(car => <Observable<any>>this.http.get(this.detailURL + car.id)
    ));

  }


  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.log(error);

    return of(result as T);
  };
}
}
