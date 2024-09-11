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
  selector: 'app-feedback-form-doctors',
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
  templateUrl: './feedback-form-doctors.component.html',
  styleUrl: './feedback-form-doctors.component.scss'
})
export class FeedbackFormDoctorsComponent {
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

  reviewDataSource = [
    {question: 'Professionnalisme du médecin/dentiste', radioName: 'care'},
    {question: 'Compréhension des besoins médicaux/dentaires', radioName: 'concerns'},
    {question: 'Clarté des explications fournies par le médecin/dentiste', radioName: 'listening'},
    {question: 'Evaluation de votre état de santé', radioName: 'clearly'},
    {question: 'Vous impliquer dans les décisions concernant votre traitement', radioName: 'respect'},
    {question: 'Fournir ou organiser un traitement adéquat pour vous', radioName: 'care'},
    // {question: "Est toujours resté professionnel?", radioName: 'professional'},
    // {question: 'A répondu à vos besoins et demandes dans les meilleurs délais?', radioName: 'respond'}
  ];

  reviewColumns = ['Question', 'notAllSatisfied', 'notSatisfied', 'noOpinion', 'satisfied', 'verySatisfied']

}
