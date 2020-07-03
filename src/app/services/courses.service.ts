import { Injectable } from '@angular/core';

import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: Course[] = [
    {
      id: '3312',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      title: 'Angular',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab cum at placeat totam nisi sit possimus nobis consequatur quaerat expedita. Id dolorem architecto magni, esse minus dolores facere in eaque.',
      tags: ['programacion', 'angular', 'coding', 'homework'],
      content: 'https://angular.io/',
      dateLine: '2020-07-02',
    },
    {
      id: '3313',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      title: 'Angular',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab cum at placeat totam nisi sit possimus nobis consequatur quaerat expedita. Id dolorem architecto magni, esse minus dolores facere in eaque.',
      tags: ['programacion', 'angular', 'coding', 'homework'],
      content: 'https://angular.io/',
      dateLine: '2020-07-02',
    },
  ];

  constructor() {}

  getAll(): Course[] {
    return this.courses;
  }

  getCourse(id: string): Course {
    return this.courses.find((item) => id === item.id);
  }
}
