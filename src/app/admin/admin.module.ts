import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CourseAdminComponent } from './components/course-admin/course-admin.component';
import { CourseTableComponent } from './components/course-table/course-table.component';

@NgModule({
  declarations: [CourseFormComponent, NavComponent, CourseAdminComponent, CourseTableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
  ],
})
export class AdminModule {}
