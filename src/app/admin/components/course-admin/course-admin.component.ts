import { Component, OnInit } from '@angular/core';
import { CourseFormComponent } from './../course-form/course-form.component';
import { MatDialog } from '@angular/material/dialog';

import { CoursesService } from './../../../core/services/courses.service';
import { Course } from './../../../models/course.model';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.css'],
})
export class CourseAdminComponent implements OnInit {
  course: Course[] = [];

  constructor(
    public dialog: MatDialog,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    // this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CourseFormComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  fetchCourses(): void {
    this.coursesService
      .getAll()
      .subscribe((response) => (this.course = response));
  }
}
