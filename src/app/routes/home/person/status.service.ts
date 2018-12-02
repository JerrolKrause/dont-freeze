import { Injectable } from '@angular/core';
import { PersonService } from './person.service';

export enum Activity {
  Walking = 'Walking',
  Sleeping = 'Sleeping'
}

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  public activity: Activity = Activity.Walking;

  constructor(public person: PersonService) { }
}
