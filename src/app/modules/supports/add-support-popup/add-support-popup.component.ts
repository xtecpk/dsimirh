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
  selector: 'app-add-support-popup',
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
  templateUrl: './add-support-popup.component.html',
  styleUrl: './add-support-popup.component.scss'
})
export class AddSupportPopupComponent {
  readonly dialogRef = inject(MatDialogRef<AddSupportPopupComponent>)
  supportForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);
  httpService= inject(HttpService)


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.supportForm = this.fb.group({
      title: ['', Validators.required],
      documentType: ['', Validators.required],
      document: ['', Validators.required]
      // createdAt: ['', Validators.required]
    });

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
/*    if (this.supportForm.valid) {
      const formData = this.supportForm.value;
      const supportData = formData

      
      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(supportData);
    }*/

    if (this.supportForm.valid) {
      const formData = this.supportForm.value;
      const supportData = {
        Title: formData.title,
        DocumentType: formData.documentType
      }
      this.httpService.httpPostReq('addsupport',supportData).pipe(
        catchError(err => {
          throw err
        })
      ).subscribe((responnse : any) =>{
        console.log('responnse',responnse)
      })
      this.dialogRef.close(supportData);
    }

   
  }
}
