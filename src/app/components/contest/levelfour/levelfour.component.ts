import { Component, ViewChild, ElementRef, Output, EventEmitter   } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-levelfour',
  templateUrl: './levelfour.component.html',
  styleUrls: ['./levelfour.component.css']
})
export class LevelfourComponent {

  dragPosition = {x: 0, y: 0};
  mostrarAlgo = false;
  ValorCambio: number = 4;
  @Output() cambio4 = new EventEmitter();

  constructor () {}

  @ViewChild("item")
  item: ElementRef;

  initialPosition = { x: 100, y: 100 };
  position = { ...this.initialPosition };
  offset = { x: 0, y: 0 };

  dragEnd(event: CdkDragEnd) {
    const transform = this.item.nativeElement.style.transform;
    let regex = /translate3d\(\s?(?<x>[-]?\d*)px,\s?(?<y>[-]?\d*)px,\s?(?<z>[-]?\d*)px\)/;
    var values = regex.exec(transform);
    console.log(transform);
    this.offset = { x: parseInt(values[1]), y: parseInt(values[2]) };

    this.position.x = this.initialPosition.x + this.offset.x;
    this.position.y = this.initialPosition.y + this.offset.y;

    console.log(this.position, this.initialPosition, this.offset);
    
    if (this.position.x > 130 && this.position.x < 300 && this.position.y < -340 && this.position.y > -520) {
      this.mostrarAlgo = true;
    } else {
      this.mostrarAlgo = false;
    }

  }

  lvl4 () {
    this.mostrarAlgo = true;
    setTimeout(() => {
      this.cambio4.emit(this.ValorCambio);
    }, 4000)


  }
}
