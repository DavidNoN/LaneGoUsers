import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levelfive',
  templateUrl: './levelfive.component.html',
  styleUrls: ['./levelfive.component.css']
})
export class LevelfiveComponent implements OnInit {

  btnCambio = false;
  reto = false;

  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout(() => {
      resolve('Ya puedes continuar');
      this.btnCambio = true;
    }, 30000);
  });

  constructor() { }

  ngOnInit(): void {
  }

  reto1(text: string) {
    text = text.toLowerCase();
    if (text === 'no') {
      this.reto = true;
    }
  }


}
