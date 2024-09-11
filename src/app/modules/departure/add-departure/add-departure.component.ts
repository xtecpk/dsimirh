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
  selector: 'app-add-departure',
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
  templateUrl: './add-departure.component.html',
  styleUrl: './add-departure.component.scss'
})
export class AddDepartureComponent {
  readonly dialogRef = inject(MatDialogRef<AddDepartureComponent>)
  departureForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.departureForm = this.fb.group({
      employeeName: ['', Validators.required],
      departureDate: ['', Validators.required],
      departureReason: ['', Validators.required],
      details: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.departureForm.valid) {
      const formData = this.departureForm.value;
      const departureData = formData

      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(departureData);
    }
  }
}
