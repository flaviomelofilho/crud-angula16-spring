import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Course } from '../model/course';
import { inject } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { of } from 'rxjs';

export const courseResolver: ResolveFn<Course> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const service = inject(CoursesService);
  const id = route.params['id'];

  if (id) {
    return service.loadById(id);
  }

  return of({ _id: '', name: '', category: '' });
};
