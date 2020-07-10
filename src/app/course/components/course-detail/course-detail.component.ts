import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

import { CoursesService } from '../../../core/services/courses.service';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  course: Course;
  timeCounter;
  available = false;
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchCourse(id);
    });
  }

  fetchCourse(id: number): void {
    this.coursesService.getCourse(id).subscribe((response) => {
      this.course = response;
      console.log('el curso: ', this.course);
      this.timeCounter = moment(response.dateLine, 'YYYY-MM-DD').fromNow(true);
      const date = moment(response.dateLine, 'YYYY-MM-DD');
      const today = moment();
      this.available = date >= today;
    });
  }
}
