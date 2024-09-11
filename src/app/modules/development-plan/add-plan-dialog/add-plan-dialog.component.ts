import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-plan-dialog',
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
  templateUrl: './add-plan-dialog.component.html',
  styleUrl: './add-plan-dialog.component.scss'
})
export class AddPlanDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddPlanDialogComponent>)
  planForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.planForm = this.fb.group({
      skill: ['', Validators.required],
      action: ['', Validators.required],
      timeline: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      resources: ['', Validators.required],
      criteria: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.planForm.valid) {
      const formData = this.planForm.value;
      const planData = formData


      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(planData);
    }
  }
}
