import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-add-service-dialog',
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
  templateUrl: './add-service-dialog.component.html',
  styleUrl: './add-service-dialog.component.scss'
})
export class AddServiceDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddServiceDialogComponent>)
  serviceForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);
  @Input() divisionData: any = []
  httpService = inject(HttpService);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      // serviceId: [0, Validators.required],
      serviceName: ['', Validators.required],
      serviceDescription: ['', Validators.required],
      deptId: ['', Validators.required],
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.serviceForm.valid) {
      const formData = this.serviceForm.value;
      const serviceData = {
        ServiceName: formData.serviceName,
        Description: formData.serviceDescription,
        DepartmentId: formData.deptId,
        // createdAt: '01 May, 2023',
        // updatedAt: '01 Jan, 2024'
      }

      console.log(serviceData);
      
      this.httpService.httpPostReq('addservice', serviceData).pipe(
        catchError(err => {
          throw err
        })
      ).subscribe((res: any) => {
        console.log('response', res);
      })


      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(serviceData);
    }
  }
}
