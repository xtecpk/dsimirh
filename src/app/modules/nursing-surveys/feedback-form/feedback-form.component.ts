import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback-form',
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
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss'
})
export class FeedbackFormComponent {
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
      caregiver: ['', Validators.required],
    });

  }


  reviewDataSource = [
    {question: 'A pris soin de vous?', radioName: 'care'},
    {question: 'Vous a écouté sans vous presser ni vous interrompre?', radioName: 'concerns'},
    {question: 'A compris vos préoccupations?', radioName: 'listening'},
    {question: 'Vous a écouté activement et a parlé clairement et calmement?', radioName: 'clearly'},
    {question: 'Vous a montré du respect?', radioName: 'respect'},
    {question: 'Vous a démontré le désir de vous prodiguer les meilleurs soins possibles?', radioName: 'care'},
    {question: "Est toujours resté professionnel?", radioName: 'professional'},
    {question: 'A répondu à vos besoins et demandes dans les meilleurs délais?', radioName: 'respond'}
  ];

  reviewColumns = ['Question', 'notAllSatisfied', 'notSatisfied', 'noOpinion', 'satisfied', 'verySatisfied']
}
