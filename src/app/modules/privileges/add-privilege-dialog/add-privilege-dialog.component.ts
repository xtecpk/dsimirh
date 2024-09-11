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
  selector: 'app-add-privilege-dialog',
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
  templateUrl: './add-privilege-dialog.component.html',
  styleUrl: './add-privilege-dialog.component.scss'
})
export class AddPrivilegeDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddPrivilegeDialogComponent>)
  privilegeForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);
  httpService= inject(HttpService)
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.privilegeForm = this.fb.group({
      privilegeId: [0, Validators.required],
      privilegeName: ['', Validators.required],
      privilegeDescription: ['', Validators.required],
      // createdDate: ['', Validators.required],
      // updatedDate: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.privilegeForm.valid) {
      const formData = this.privilegeForm.value;
      const privilegeData = {
        PrivilegeName: formData.privilegeName,
        Description: formData.privilegeDescription,
        // createdAt: formData.createdDate,
        // updatedAt: formData.updatedDate
      }

      this.httpService.httpPostReq('addprivilege',privilegeData).pipe(
        catchError(err => {
          throw err
        })
      ).subscribe((responnse : any) =>{
        console.log('responnse',responnse)
      })

      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(privilegeData);
    }
  }
}
