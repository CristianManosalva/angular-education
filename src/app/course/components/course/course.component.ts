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
  viewed = false;

  ngOnInit(): void {
    moment.locale('es');
    this.timeCounter = moment(this.course.dateLine, 'YYYY-MM-DD').fromNow(true);
    const date = moment(this.course.dateLine, 'YYYY-MM-DD');
    const today = moment();
    this.available = date >= today;
    this.isSeen();
  }

  seen(id: number): void {
    console.log('seen id: ', id);
    this.courseSeen.emit(this.course.id);
    this.saveSeen();
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

  saveSeen(): void {
    let localViewed: Array<Course> = JSON.parse(
      localStorage.getItem('viewedCourses')
    );
    if (localViewed) {
      localViewed.push(this.course);
    } else {
      localViewed = [];
      this.viewed = true;
      localViewed.push(this.course);
    }
    localStorage.setItem('viewedCourses', JSON.stringify(localViewed));
  }

  isSeen(): void {
    const localViewed: Array<Course> = JSON.parse(
      localStorage.getItem('viewedCourses')
    );
    if (localViewed) {
      const index = localViewed.findIndex((item) => item.id === this.course.id);
      this.viewed = index >= 0;
    }
  }
}
