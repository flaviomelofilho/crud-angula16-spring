import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuild.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    this.service.save({ record: this.form.value }).subscribe({
      next: (result) => {
        console.log('Resultado:', result);
        this.snackBar.open('Curso salvo com sucesso!', 'Fechar', {
          duration: 3000,
        });
      },
      error: (error) => {
        console.error('Erro:', error);
        this.snackBar.open('Erro ao salvar o curso.', 'Fechar', {
          duration: 3000,
        });
      },
    });
  }

  onCancel() {}
}
