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
  tags: Tag[] = [{ id: 1, name: 'Programacion' }];

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
      this.tags.push({ id: 1, name: value.trim() });
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
    // const course: Course = {
    //   id: 1,
    //   picture:
    //     'https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/internacionalizacion-en-django-t1.png',
    //   dateLine: '2020-07-06',
    //   description:
    //     'Hola amigos en este artículo, aprenderás a utilizar internacionalización en tu sistema web con la finalidad que una persona elija el idioma a traducir y de esta manera llegar a más público, para ello veamos algunos conceptos',
    //   title: 'Django',
    //   content: 'https://devcode.la/tutoriales/internacionalizacion-en-django/',
    //   tags: [
    //     { id: 1, name: 'Programacion' },
    //     { id: 1, name: 'python' },
    //     { id: 1, name: 'django' },
    //   ],
    //   category_id: 2,
    // };
    const course: Course = this.addressForm.value;
    course.tags = this.tags;
    this.coursesService
      .createCourse(course)
      .subscribe((response) => console.log('reponse for create', response));
  }
}
