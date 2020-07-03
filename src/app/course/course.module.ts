import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseComponent } from './components/course/course.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CoursesComponent } from './components/courses/courses.component';

import { CourseRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CourseComponent, CourseDetailComponent, CoursesComponent],
  imports: [CommonModule, CourseRoutingModule, MaterialModule],
})
export class CourseModule {}
