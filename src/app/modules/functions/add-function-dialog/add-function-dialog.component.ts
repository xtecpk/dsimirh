import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker' 
import { provideNativeDateAdapter } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-add-function-dialog',
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
  templateUrl: './add-function-dialog.component.html',
  styleUrl: './add-function-dialog.component.scss'
})
export class AddFunctionDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddFunctionDialogComponent>)
  functionForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);
  httpService = inject(HttpService);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.functionForm = this.fb.group({
      functionName: ['', Validators.required],
      functionDescription: ['', Validators.required],
      // createdDate: ['', Validators.required],
      // updatedDate: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.functionForm.valid) {
      const formData = this.functionForm.value;
      const functionData = {
        FunctionsName: formData.functionName,
        Description: formData.functionDescription,
        JobId: '1',
        // createdAt: formData.createdDate,
        // updatedAt: formData.updatedDate
      }

      this.httpService.httpPostReq('addfunction',functionData).pipe(
        catchError(err => {
          throw err
        })
      ).subscribe((responnse : any) =>{
        console.log('responnse',responnse)
        this.dialogRef.close(functionData);
      })



      // this.chuCocody.addAnnouncement(announcementData);
    }
  }
}
