import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarListService } from './car-list.service';


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
    console.log(this.carList);

  }

  getCars(): void{
    this.carListService.getCars()
    .subscribe(carList=>{this.carList=carList});

  }
}
