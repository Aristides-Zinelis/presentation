import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { CarListService } from './car-list.service';

describe('CarListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
       imports: [HttpClientTestingModule],
       providers: [CarListService]
  }));

  it('should be created', () => {
    const service: CarListService = TestBed.get(CarListService);
    expect(service).toBeTruthy();
  });
});
