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
    this.courses = this.coursesService.getAll();
  }

  addCourseSeen(id: string): void {
    console.log('seen from course module: ', id);
  }
}
