import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numbers = new EventEmitter<{number : number}>();
  //not sure what type to declare here
  num;
  subscription : Subscription;

  constructor() { }

  ngOnInit(): void {

  }

  startCount() {
    //event (holding a incrementing number) should get emitted each second (ref = setInterval())
    this.num = interval(1000);
    this.subscription = this.num.subscribe(n =>
      this.numbers.emit(n));
    console.log(this.num);
  }

  stopCount() {
    //event (holding a incrementing number) should get emitted each second (ref = setInterval())
    this.subscription.unsubscribe();
  }
}
