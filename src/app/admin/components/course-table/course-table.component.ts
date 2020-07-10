import { Component, OnInit } from '@angular/core';

import { Course } from './../../../models/course.model';
import { CoursesService } from './../../../core/services/courses.service';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css'],
})
export class CourseTableComponent implements OnInit {
  displayedColumns: string[] = [
    'picture',
    'title',
    'category',
    'content',
    'dateLine',
    'actions',
  ];
  dataSource: Course[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.coursesService
      .getAll()
      .subscribe((response) => (this.dataSource = response));
  }

  deleteCourses(id: number): void {
    this.coursesService
      .deleteCourse(id)
      .subscribe((response) => this.remove(response));
  }

  remove(course: Course): void {
    if (course) {
      const index = this.dataSource.findIndex((item) => item.id === course.id);
      if (index >= 0) {
        this.dataSource.splice(index, 1);
        this.dataSource = [...this.dataSource];
      }
      console.log('index: ', index);
    }
  }
}
