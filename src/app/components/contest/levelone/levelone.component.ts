import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-levelone',
  templateUrl: './levelone.component.html',
  styleUrls: ['./levelone.component.css']
})
export class LeveloneComponent implements OnInit {

  controlPage2: string = 'liz';
  controlError2: boolean = false;

  @Output() cambio = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  Changepage2 (value: string) {
    value = value.toLowerCase();
    if (this.controlPage2 === value) {
       this.cambio.emit(value);
    } else {
      this.controlError2 = true;
    }
  }

}
