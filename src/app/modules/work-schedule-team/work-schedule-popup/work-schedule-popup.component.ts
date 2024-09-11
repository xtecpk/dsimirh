import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-work-schedule-popup',
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
  templateUrl: './work-schedule-popup.component.html',
  styleUrl: './work-schedule-popup.component.scss'
})
export class WorkSchedulePopupComponent {
  readonly dialogRef = inject(MatDialogRef<WorkSchedulePopupComponent>)
  workForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.workForm = this.fb.group({
      selectTeam: ['', Validators.required],
      selectEmployee: ['', Validators.required],
      selectPeriod: ['', Validators.required],
      NumberOfBeds: ['', Validators.required],
      selectMonth: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.workForm.valid) {
      const formData = this.workForm.value;
      const workData = formData

      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(workData);
    }
  }
}
