import { courseResolver } from './../../guards/course.resolver';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form = this.formBuild.nonNullable.group({
    _id: [''],
    name: [''],
    category: [''],
  });

  constructor(
    private formBuild: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    const course: Course = this.route.snapshot.data['course'];
    this.form.setValue({
      _id: course._id,
      name: course.name,
      category: course.category,
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (result) => {
        console.log('Resultado:', result);
        this.snackBar.open('Curso salvo com sucesso!', 'Fechar', {
          duration: 3000,
        });
        this.onCancel();
      },
      error: (error) => {
        console.error('Erro:', error);
        this.snackBar.open('Erro ao salvar o curso.', 'Fechar', {
          duration: 3000,
        });
      },
    });
  }

  onCancel() {
    this.location.back();
  }
}
