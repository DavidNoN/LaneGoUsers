import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-leveltwo',
  templateUrl: './leveltwo.component.html',
  styleUrls: ['./leveltwo.component.css']
})
export class LeveltwoComponent implements OnInit {

  @Output() cambio2 = new EventEmitter();

  controlPage3: string = 'refresca tu día';
  controlPage31: string = 'refresca tu dia';
  controlError3: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  Changepage3 (value: string) {
    value = value.toLowerCase();
    if (this.controlPage3 === value || this.controlPage31 === value) {
       this.cambio2.emit(value);
    } else {
      this.controlError3 = true;
    }
  }

}
