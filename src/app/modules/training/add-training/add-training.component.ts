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

@Component({
  selector: 'app-add-training',
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
  templateUrl: './add-training.component.html',
  styleUrl: './add-training.component.scss'
})
export class AddTrainingComponent {
  readonly dialogRef = inject(MatDialogRef<AddTrainingComponent>)
  trainingForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.trainingForm = this.fb.group({
      employeeName: ['', Validators.required],
      startDate: ['', Validators.required],
      dateResumed: ['', Validators.required],
      training: ['', Validators.required],
      details: ['', Validators.required],
      // justificationDoc: ['', Validators.required],
      // pleaseDownload: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.trainingForm.valid) {
      const formData = this.trainingForm.value;
      const leaveData = formData

      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(leaveData);
    }
  }
}
