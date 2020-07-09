import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseFormComponent } from './components/course-form/course-form.component';
import { NavComponent } from './components/nav/nav.component';
const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: CourseFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
