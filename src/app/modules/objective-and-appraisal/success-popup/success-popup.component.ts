import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { AppraisalPopupComponent } from '../appraisal-popup/appraisal-popup.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-success-popup',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    TranslateModule,
    MatIcon
  ],
  templateUrl: './success-popup.component.html',
  styleUrl: './success-popup.component.scss'
})
export class SuccessPopupComponent {
  readonly dialogRef = inject(MatDialogRef<SuccessPopupComponent>)
  readonly dialog = inject(MatDialog)
  objectData: any;

  openDialog() {
    const dialogRef = this.dialog.open(AppraisalPopupComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.objectData = res
    });
    this.onNoClick()
  }

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
