import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-add-grade-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    TranslateModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-grade-dialog.component.html',
  styleUrl: './add-grade-dialog.component.scss'
})
export class AddGradeDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddGradeDialogComponent>)
  gradeForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);
  httpService= inject(HttpService)

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.gradeForm = this.fb.group({
      gradeId: [0, Validators.required],
      gradeName: ['', Validators.required],
      // gradeLevel: [0, Validators.required],
      // createdDate: ['', Validators.required],
      // updatedDate: ['', Validators.required]
    });

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.gradeForm.valid) {
      const formData = this.gradeForm.value;
      const gradeData = {
        GradeName: formData.gradeName,
        GradeLevel: 1,
        // createdAt: formData.createdDate,
        // updatedAt: formData.updatedDate
      }

      this.httpService.httpPostReq('addgrade',gradeData).pipe(
        catchError(err => {
          throw err
        })
      ).subscribe((responnse : any) =>{
        console.log('responnse',responnse)
      })



      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(gradeData);
    }
  }
}
