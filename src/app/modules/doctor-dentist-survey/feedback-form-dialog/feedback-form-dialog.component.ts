import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback-form-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTableModule,
    MatRadioModule,
    TranslateModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './feedback-form-dialog.component.html',
  styleUrl: './feedback-form-dialog.component.scss'
})
export class FeedbackFormDialogComponent {
  readonly dialogRef = inject(MatDialogRef<FeedbackFormDialogComponent>)
  patientDetailsForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.patientDetailsForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      occupation: ['', Validators.required],
      age: ['', Validators.required],
      person: ['', Validators.required],
      reason: ['', Validators.required],
      response: ['', Validators.required]
    });

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.patientDetailsForm.valid) {
      const formData = this.patientDetailsForm.value;
      const contractData = {
        contractName: formData.contractName,
        description: formData.contractDescription,
        createdAt: formData.startDate
      }

      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(contractData);
    }
  }

  reviewDataSource = [
    {question: 'Were you taken care of?', radioName: 'care'},
    {question: 'Did they understand your concerns?', radioName: 'concerns'},
    {question: 'Did they listen to you without rushing or interrupting?', radioName: 'listening'},
    {question: 'Did they actively listen and speak clearly and calmly?', radioName: 'clearly'},
    {question: 'Did they show you respect?', radioName: 'respect'},
    {question: 'Did they demonstrate a desire to provide you with the best possible care?', radioName: 'care'},
    {question: 'Did they remain professional at all times?', radioName: 'professional'},
    {question: 'Did they respond to your needs and requests promptly?', radioName: 'respond'}
  ];

  reviewColumns = ['Question', 'notAllSatisfied', 'notSatisfied', 'noOpinion', 'satisfied', 'verySatisfied']
}
