import { Injectable } from '@angular/core';
import { InfoService } from './info.service';
import { StatsService } from './stats.service';
import { StatusService } from './status.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public info = new InfoService(this);
  public stats = new StatsService(this);
  public status = new StatusService(this);

  constructor() { }

}
