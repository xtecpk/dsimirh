import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-add-dept-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './add-dept-dialog.component.html',
  styleUrl: './add-dept-dialog.component.scss'
})
export class AddDeptDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddDeptDialogComponent>)
  deptForm: FormGroup = new FormGroup({});
  httpService= inject(HttpService)

  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.deptForm = this.fb.group({
      // deptId: [''],
      deptName: ['', Validators.required],
      deptDirector: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.deptForm.valid) {
      const formData = this.deptForm.value;
      const deptData = {
        DivisionName: formData.deptName,
        Director: formData.deptDirector,
      }
      this.httpService.httpPostReq('adddivision',deptData).pipe(
        catchError(err => {
          throw err
        })
      ).subscribe((responnse : any) =>{
        console.log('responnse',responnse)
        this.dialogRef.close(deptData);
      })
      // this.chuCocody.addAnnouncement(announcementData);
    }
  }
}
