import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Course, Category } from '../../../models/course.model';
import { CoursesService } from '../../../core/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  categoryField: FormControl;
  categories: Category[] = [];
  categoryId = null;
  laodingCourses = false;

  constructor(private coursesService: CoursesService) {
    this.categoryField = new FormControl();
    this.categoryField.valueChanges.subscribe((value) =>
      this.fetchCoursesByCategory(value)
    );
  }

  ngOnInit(): void {
    this.fetchCourses();
    this.fetchcategories();
    // console.log('Here: ', this.fetchCourses());
  }

  addCourseSeen(id: string): void {
    console.log('seen from course module: ', id);
  }

  fetchCourses(): void {
    this.laodingCourses = true;
    this.coursesService.getAll().subscribe((response) => {
      this.courses = response;
      setTimeout(() => (this.laodingCourses = false), 100);
    });
  }

  fetchcategories(): void {
    this.coursesService
      .getAllCategories()
      .subscribe((response) => (this.categories = response));
  }

  fetchCoursesByCategory(id: number): void {
    this.laodingCourses = true;
    this.coursesService.getByCategory(id).subscribe((response) => {
      this.courses = response;
      setTimeout(() => (this.laodingCourses = false), 100);
    });
  }
}
