import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ValidadoresService } from '../../services/validadores.service';




@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {

  controlContest: number = 0;
  controlPage1: string = 'lanego';
  controlError1: boolean = false;
  controlPage2: string = 'liz';
  controlError2: boolean = false;
  id2: number;
  value2: string;


  constructor(public auth: AuthService,
              private validadores: ValidadoresService
    ) { }

  ngOnInit(): void {
  }

  page2(e: string) {
    this.value2 = e;
    this.controlContest = 2;
  }

  page3(e: string) {
    this.value2 = e;
    this.controlContest = 3;
  }

  page4(e: number) {
    this.controlContest = 4;
  }

  page5(e: number) {
    this.controlContest = 5;
  }


  controlPages(id: number, value: string) {
    value = value.toLowerCase();
    if (this.controlPage1 === value) {
      this.controlContest = 1;
    } else {
      this.controlError1 = true;
    }

  }

}
