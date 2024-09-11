import { Component, Inject, Input, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-leaves-dialog',
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
  templateUrl: './leaves-dialog.component.html',
  styleUrl: './leaves-dialog.component.scss'
})
export class LeavesDialogComponent {
  @Input() fieldsToShow: string[] = []
  readonly dialogRef = inject(MatDialogRef<LeavesDialogComponent>)
  leaveForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  // }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.fieldsToShow = data.fieldsToShow;
    console.log(this.fieldsToShow)
  }

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      agentId: new FormControl(''),
      agentName: new FormControl(''),
      departureDate: new FormControl(''),
      permission: new FormControl(''),
      exitPlace: new FormControl(''),
      departureTime: new FormControl(''),
      returnTime: new FormControl(''),
      effectiveTime: new FormControl(''),
      document: new FormControl(''),
      expectedDate: new FormControl(''),
      leaveStart: new FormControl({ value: '', disabled: true }),
      leaveEnd: new FormControl({ value: '', disabled: true }),
      recoveryDate: new FormControl({ value: '', disabled: true })
    })

    this.leaveForm.get('expectedDate')?.valueChanges.subscribe(chng => {
      console.log('Leave Value Changed', chng);
      
      let expectedDateInput = new Date(chng);
    
      // Calculate the start leave date by subtracting 42 days from the expected date
      let startLeaveDate = new Date(expectedDateInput);
      startLeaveDate.setDate(startLeaveDate.getDate() - 42);
      this.leaveForm.get('leaveStart')?.setValue(startLeaveDate);
    
      console.log('Start Leave Date:', startLeaveDate);
    
      // Calculate the end leave date by adding 98 days to the expected date
      let endLeaveDate = new Date(expectedDateInput);
      endLeaveDate.setDate(endLeaveDate.getDate() + 98);
      this.leaveForm.get('leaveEnd')?.setValue(endLeaveDate);
    
      console.log('End Leave Date:', endLeaveDate);
    
      // Calculate the repair date (one day after the end leave date)
      let repairDate = new Date(endLeaveDate);
      repairDate.setDate(repairDate.getDate() + 1);
      
      console.log('Repair Date:', repairDate);
    
      this.leaveForm.get('recoveryDate')?.setValue(repairDate);
    });
    

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

  departureDate() {

  }
}
