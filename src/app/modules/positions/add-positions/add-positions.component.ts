import { Component, Input, inject } from '@angular/core';
import { AddJobsDialogComponent } from '../../jobs/add-jobs-dialog/add-jobs-dialog.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-add-positions',
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
  templateUrl: './add-positions.component.html',
  styleUrl: './add-positions.component.scss'
})
export class AddPositionsComponent {

  readonly dialogRef = inject(MatDialogRef<AddPositionsComponent>)
  jobsForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);
  httpService= inject(HttpService)
  @Input() departmentData:any = []


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.jobsForm = this.fb.group({
      positionTitle: ['', Validators.required],
      positionCode: ['', Validators.required],
      noOfPositions: ['', Validators.required, Validators.pattern(/^[0-9]+$/)],
      department: ['']
    })

    // this.fetchData();

  }


  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.jobsForm.valid) {
      const formData = this.jobsForm.value;
      const positionData = {
        Title: formData.positionTitle,
        PositionCode: formData.positionCode,
        NumberOfPosition: formData.noOfPositions,
        DepartmentId: formData.department
      }

      console.log(positionData);
      
      this.httpService.httpPostReq('addposition', positionData).pipe(
        catchError(err => {
          throw err
        })
      ).subscribe((res: any) => {
        console.log('response', res);
      })
      
      
      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(positionData);
    }
  }
}
