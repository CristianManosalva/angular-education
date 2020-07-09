import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../../models/course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>('http://127.0.0.1:4000/api/v1/courses');
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`http://127.0.0.1:4000/api/v1/courses/${id}`);
  }
}
