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
  selector: 'app-add-sick-leave',
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
  templateUrl: './add-sick-leave.component.html',
  styleUrl: './add-sick-leave.component.scss'
})
export class AddSickLeaveComponent {
  readonly dialogRef = inject(MatDialogRef<AddSickLeaveComponent>)
  leaveForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      employeeName: ['', Validators.required],
      startDate: ['', Validators.required],
      dateResumed: ['', Validators.required],
      leaveReason: ['', Validators.required],
      details: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.leaveForm.valid) {
      const formData = this.leaveForm.value;
      const leaveData = formData

      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(leaveData);
    }
  }
}
