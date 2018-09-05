import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  constructor() { }

  ngOnInit() {
  }

  // onStartGame() {
  //   this.interval = setInterval(function() {
  //     this.intervalFired.emit(this.lastNumber++); 
  //     this.lastNumber++;
  //   }.bind(this),1000);
  // }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber++); 
    },1000);
  }

  onPauseGame() {
    clearInterval(this.interval)
  };
}
