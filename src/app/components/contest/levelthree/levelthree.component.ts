import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-levelthree',
  templateUrl: './levelthree.component.html',
  styleUrls: ['./levelthree.component.css']
})
export class LevelthreeComponent implements OnInit {


  @Output() cambio3 = new EventEmitter();
  mostrarAlgo: boolean = false;
  ValorCambio: number = 4;

  constructor() { }

  ngOnInit(): void {
  }

  lvl3 () {
    this.mostrarAlgo = true;
    setTimeout(() => {
      this.cambio3.emit(this.ValorCambio);
    }, 4000)


  }

}
