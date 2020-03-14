import {Component, OnInit} from '@angular/core';
import {Car} from './car/car,model';
import {CarService} from './car/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cars: Car[] = [];
  public selectedCar: string;
  public carDeliveryStatus: string;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.cars.push(new Car('Audi', 'A6', 'benzyna', 'sedan'));
    this.cars.push(new Car('Mercedes', 'Klasa A', 'benzyna', 'hatchback'));
    this.cars.push(new Car('BMW', 'Seria 4', 'diesel', 'coupe'));
    this.carDeliveryStatus = this.carService._status;
  }

  public carSelected(car: Car): void {
    this.selectedCar = car.brand;
  }
}
