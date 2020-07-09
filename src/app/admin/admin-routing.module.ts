import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseAdminComponent } from './components/course-admin/course-admin.component';
import { NavComponent } from './components/nav/nav.component';
const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'course',
        component: CourseAdminComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
