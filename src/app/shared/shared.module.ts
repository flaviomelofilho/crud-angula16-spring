import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryPipe } from './pipes/category.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ErrorDialogComponent, CategoryPipe, ConfirmationDialogComponent],
  imports: [CommonModule, MatDialogModule,MatButtonModule],
  exports: [ErrorDialogComponent,CategoryPipe,ConfirmationDialogComponent],
})
export class SharedModule {}
