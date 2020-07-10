import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../../models/course.model';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.url_api}/courses`);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${environment.url_api}/courses/${id}`);
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${environment.url_api}/courses`, course);
  }
  deleteCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(`${environment.url_api}/courses/${id}`);
  }
}
