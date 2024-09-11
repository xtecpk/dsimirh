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
  selector: 'app-appraisal-popup',
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
  templateUrl: './appraisal-popup.component.html',
  styleUrl: './appraisal-popup.component.scss'
})
export class AppraisalPopupComponent {
  readonly dialogRef = inject(MatDialogRef<AppraisalPopupComponent>)

  objectForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.objectForm = this.fb.group({
      achievements: ['', Validators.required],
      comments: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.objectForm.valid) {
      const formData = this.objectForm.value;
      const objectData = formData


      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(objectData);
    }
  }
}
