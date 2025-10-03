import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form:FormGroup;

  constructor(private formBuild: FormBuilder){
    this.form = this.formBuild.group({
      name:[null],
      category:[null]
    });
  }



}
