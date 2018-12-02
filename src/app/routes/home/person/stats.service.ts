import { Injectable } from '@angular/core';
import { PersonService } from './person.service';
import { Activity } from './status.service';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  public morale = 999;
  public energy = 999;
  public health = 999;

  constructor(public person: PersonService) {}

  /** When time passes */
  public tick() {

   this.manageEnergy();

    switch (this.person.status.activity) {
      case Activity.Walking:
        this.energy--;
        break;
      case Activity.Sleeping:
        this.energy++;
        break;
    }
  }

  /** Manage a persons energy */
  private manageEnergy() {
    if (this.energy <= 990) {
      this.person.status.activity = Activity.Sleeping;
    } else if (this.energy >= 999) {
      this.person.status.activity = Activity.Walking;
    }
  }


}
