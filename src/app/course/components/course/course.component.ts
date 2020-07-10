import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() courseSeen: EventEmitter<number> = new EventEmitter();

  constructor() {}

  timeCounter;
  available = false;

  ngOnInit(): void {
    moment.locale('es');
    this.timeCounter = moment(this.course.dateLine, 'YYYY-MM-DD').fromNow(true);
    const date = moment(this.course.dateLine, 'YYYY-MM-DD');
    const today = moment();
    this.available = date >= today;
  }

  seen(id: number): void {
    console.log('seen id: ', id);
    this.courseSeen.emit(this.course.id);
  }

  ramdomColor(): string {
    return [
      'aquamarine',
      'deepskyblue',
      'lightseagreen',
      'yellowgreen',
      'orange',
      'lightblue',
      'powderblue',
      'mistyrose',
    ][Math.floor(Math.random() * 8)];
  }
}
