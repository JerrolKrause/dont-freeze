import { Injectable } from '@angular/core';
import { PersonService } from './person.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public nameFirst = 'Jerrol';
  public nameLast = 'Krause';
  public age = 37;
  public get nameFull() {
    return this.nameFirst + ' ' + this.nameLast;
  }

  constructor(private person: PersonService) {
  }
}
