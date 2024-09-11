import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { LeavesDialogComponent } from '../../leaves-dialog/leaves-dialog.component';
import { AbsenceLeavePopupComponent } from '../absence-leave-popup/absence-leave-popup.component';

@Component({
  selector: 'app-leaves-popup',
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
  templateUrl: './leaves-popup.component.html',
  styleUrl: './leaves-popup.component.scss'
})
export class LeavesPopupComponent {
  readonly dialogRef = inject(MatDialogRef<LeavesPopupComponent>)
  leaveForm: FormGroup = new FormGroup({});
  leaveType: string | undefined;

  readonly dialog = inject(MatDialog)
  leaveData: any;

  openDialog() {
    const dialogRef = this.dialog.open(AbsenceLeavePopupComponent, {
      data: {fieldsToShow: [this.leaveType]}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.leaveData = res
      // if (this.leaveData) this.addLeave(this.leaveData);
    });
  }
  // addLeave(leave: any) {
  //   this.leaveDataSource = [...this.leaveDataSource, leave]
  // }
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      leaveType: ['', Validators.required]
    })

    this.leaveForm.get('leaveType')?.valueChanges.subscribe((value) => {
      this.leaveType = value;
      this.openDialog();
      this.onNoClick()
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.leaveForm.valid) {
      const formData = this.leaveForm.value;
      this.leaveType = formData.leaveType;
      const leaveData = formData




      // this.chuCocody.addAnnouncement(announcementData);
      this.openDialog();
      this.dialogRef.close(leaveData);
    }
  }
}
