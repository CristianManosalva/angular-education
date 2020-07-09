import { Component, OnInit } from '@angular/core';

import { Course } from '../../../models/course.model';
import { CoursesService } from '../../../core/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourses();
    // console.log('Here: ', this.fetchCourses());
  }

  addCourseSeen(id: string): void {
    console.log('seen from course module: ', id);
  }

  fetchCourses() {
    this.coursesService
      .getAll()
      .subscribe((response) => (this.courses = response));
  }
}
