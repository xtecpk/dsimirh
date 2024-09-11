import { Component, inject } from '@angular/core';
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
  selector: 'app-add-unit-dialog',
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
  templateUrl: './add-unit-dialog.component.html',
  styleUrl: './add-unit-dialog.component.scss'
})
export class AddUnitDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddUnitDialogComponent>)
  unitForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);
  httpService= inject(HttpService)


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.unitForm = this.fb.group({
      // unitId: [0, Validators.required],
      unitName: ['', Validators.required],
      unitDescription: ['', Validators.required],
      serviceId: [0, Validators.required],
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    // if (this.unitForm.valid) {
    //   const formData = this.unitForm.value;
    //   const unitData = {
    //     unitName: formData.unitName,
    //     description: formData.unitDescription,
    //     serviceId: formData.serviceId,
    //     createdAt: '01 May, 2023',
    //     updatedAt: '01 Jan, 2024'
    //   }

    //   // this.chuCocody.addAnnouncement(announcementData);
    //   this.dialogRef.close(unitData);
    // }

    if (this.unitForm.valid) {
      const formData = this.unitForm.value;
      const unitData = {
        UnitName: formData.unitName,
        Description: formData.unitDescription,
        ServiceId: formData.serviceId,
        // createdAt: '01 May, 2023',
        // updatedAt: '01 Jan, 2024'
      }
      this.httpService.httpPostReq('addunit',unitData).pipe(
        catchError(err => {
          throw err
        })
      ).subscribe((responnse : any) =>{
        console.log('responnse',responnse)
      })
      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(unitData);
    }
  }
}
