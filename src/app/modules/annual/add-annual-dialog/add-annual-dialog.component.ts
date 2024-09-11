import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  selector: 'app-add-annual-dialog',
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
  templateUrl: './add-annual-dialog.component.html',
  styleUrl: './add-annual-dialog.component.scss'
})
export class AddAnnualDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddAnnualDialogComponent>)
  leaveForm: FormGroup;
  httpService= inject(HttpService)

  constructor(private fb: FormBuilder) {
    this.leaveForm = this.fb.group({
      leaves: this.fb.array([])
    });
  }

  get leaves(): FormArray {
    return this.leaveForm.get('leaves') as FormArray;
  }

  addLeave() {
    const leaveFormGroup = this.fb.group({
      planTitle: ['', Validators.required],
      leaveTitle: ['', Validators.required],
      leaveDate: ['', Validators.required]
    });

    this.leaves.push(leaveFormGroup);
  }

  removeLeave(index: number) {
    this.leaves.removeAt(index);
  }

  onSubmit() {
    console.log(this.leaveForm.value);
  }

  sendData() {
    /*if (this.leaveForm.valid) {
      const formData = this.leaveForm.value;
      const leaveData = formData

      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(leaveData);
    }*/

    if (this.leaveForm.valid) {
      const formData = this.leaveForm.value;
      const leaveData = {
        Title: formData.planTitle,
        LeavePlan: formData.leaveTitle,
        LeaveDate: formData.leaveDate,
        // createdAt: '01 May, 2023',
        // updatedAt: '01 Jan, 2024'
      }
      this.httpService.httpPostReq('addleave',leaveData).pipe(
        catchError(err => {
          throw err
        })
      ).subscribe((responnse : any) =>{
        console.log('responnse',responnse)
      })
      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(leaveData);
    }
  }
  ngOnInit(): void {
    this.addLeave()
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
