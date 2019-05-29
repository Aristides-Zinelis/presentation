import { Component } from '@angular/core';
import { CarListService } from './car-list.service';
import { Observable,from, forkJoin} from 'rxjs';
import { mergeMap, toArray, switchMap, map} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'presentation';
  carList;

  constructor(private carListService: CarListService) {}
  ngOnInit() {
    this.getCars();
    // console.log(this.carList);

  }

  getCars(): void{
    this.carListService.getCars().pipe(
      switchMap(cars=> from(cars)),
      mergeMap(car => forkJoin(this.carListService.getCarDetails(car.id))
                                .pipe(map(details => ({car, details})))),
      toArray()
    )
    .subscribe(carList=>{this.carList=carList});
  }
}
