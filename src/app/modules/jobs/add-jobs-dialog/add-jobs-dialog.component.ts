import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-jobs-dialog',
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
  templateUrl: './add-jobs-dialog.component.html',
  styleUrl: './add-jobs-dialog.component.scss'
})
export class AddJobsDialogComponent {

  readonly dialogRef = inject(MatDialogRef<AddJobsDialogComponent>)
  jobsForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.jobsForm = this.fb.group({
      jobTitle: ['', Validators.required],
      jobCode: ['', Validators.required],
      noOfJobs: ['', Validators.required],
      department: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.jobsForm.valid) {
      const formData = this.jobsForm.value;
      const jobsData = {
        department: formData.jobDepartment,
        jobTitle: formData.jobTitle,
        jobCode: formData.jobCode,
        noOfJobs: '4'
      }


      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(jobsData);
    }
  }
}
