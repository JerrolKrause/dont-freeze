import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { PersonService } from './person/person.service';
import { interval, Observable, Subscription } from 'rxjs';

@AutoUnsubscribe()
@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  public person = this.personCreate();

  public timer$: Observable<number>;
  public timerSub: Subscription;

  constructor() {
    console.log(this.person);
    this.ticksStart();
  }

  public ngOnInit() {}

  public ticksStart() {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }

    this.timer$ = interval(300);
    
    this.timerSub = this.timer$.subscribe(ticks => {
      if (ticks > 10) {
        this.ticksStart();
      }
      this.person.stats.tick();
    });

  }

  public personCreate() {
    return new PersonService();
  }

  // Must be present even if not used for unsubs
  ngOnDestroy() {}
}
