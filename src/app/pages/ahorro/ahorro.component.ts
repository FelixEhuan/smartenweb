import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ahorro',
  templateUrl: './ahorro.component.html',
  styleUrls: ['./ahorro.component.scss']
})
export class AhorroComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};
  tab = 'dia';
  // meses:
  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
    this.model = this.calendar.getToday();
  }

}
