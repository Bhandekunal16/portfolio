import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  public header() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
}
