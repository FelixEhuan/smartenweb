import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDatepicker, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private calendar: NgbCalendar, private dateconfig: NgbDatepickerConfig) { }

  ngOnInit() {
    this.model = {year: 2018, month: 11, day: 23};
    // this.datepicker.navigateTo({year: 2018, month: 11});
    this.dateconfig.startDate = {year: 2018, month: 11};
    console.log(this.model);
    // this.datepicker.navigateTo(date:{year:2018; month: 11; day:23});
  }

}
