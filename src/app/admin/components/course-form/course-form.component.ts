import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { CoursesService } from './../../../core/services/courses.service';
import { Course } from './../../../models/course.model';
import { Tag } from './../../../models/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent {
  addressForm = this.fb.group({
    title: null,
    description: [null, Validators.required],
    content: [null, Validators.required],
    picture: [null, Validators.required],
    dateLine: [null, Validators.required],
    category_id: [null, Validators.required],
    // tags: [[], Validators.required],
  });

  states = [
    { name: 'Tegnologia', id: 1 },
    { name: 'Coding', id: 2 },
  ];
  tsts = false;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
  tags: Tag[] = [{ name: 'Programacion' }];

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService
  ) {}

  onSubmit(): void {
    // this.createCourse();
    this.tsts = true;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  createCourse(): void {
    const course: Course = this.addressForm.value;
    course.tags = this.tags;
    console.log('Course: ', course);
    this.coursesService
      .createCourse(course)
      .subscribe((response) => console.log('reponse for create', response));
  }
}
