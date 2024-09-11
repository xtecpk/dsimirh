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
  selector: 'app-add-object-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
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
  templateUrl: './add-object-dialog.component.html',
  styleUrl: './add-object-dialog.component.scss'
})
export class AddObjectDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddObjectDialogComponent>)
  objectForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.objectForm = this.fb.group({
      title: ['', Validators.required],
      goals: ['', Validators.required],
      keyActions: ['', Validators.required],
      requiredResources: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      successMetric: ['', Validators.required],
      potentialChanges: ['', Validators.required],
      supportNeeded: ['', Validators.required],
      weight: ['', Validators.required],
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.objectForm.valid) {
      const formData = this.objectForm.value;
      const objectData = {
        objectiveTitle: formData.title,
        objectiveDsecription: formData.description,
        startDate: formData.startTime,
        endDate: formData.endTime
      }





      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(objectData);
    }
  }
}
