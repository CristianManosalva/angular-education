import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() courseSeen: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  seen(id: string): void {
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
