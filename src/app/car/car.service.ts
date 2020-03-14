import {Injectable} from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CarService {
  public _status: string;

  constructor() {
    this._status = 'PENDING';
  }

  get status(): string {
    return this._status;
  }
}
