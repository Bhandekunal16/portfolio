import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public statusSubject=new BehaviorSubject(null)
  constructor() { }
}
