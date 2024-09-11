import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-employee-feedback-dialog',
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
  templateUrl: './employee-feedback-dialog.component.html',
  styleUrl: './employee-feedback-dialog.component.scss'
})
export class EmployeeFeedbackDialogComponent {
  readonly dialogRef = inject(MatDialogRef<EmployeeFeedbackDialogComponent>)
  feedbackForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      feedbackType: ['', Validators.required]
    });

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.feedbackForm.valid) {
      const formData = this.feedbackForm.value;
      const feedbackData = formData

      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(feedbackData);
    }
  }

  reviewDataSource = [
    {question: 'À quel point la personne communique-t-elle efficacement ses idées et ses pensées?', radioName: 'communication'},
    {question: "À quel point la personne collabore-t-elle et contribue-t-elle aux efforts de l'équipe?", radioName: 'teamwork'},
    {question: "À quel point la personne respecte-t-elle les délais et arrive-t-elle à l'heure?", radioName: 'punctuality'},
    {question: "À quel point la personne accomplit-elle les tâches et atteint-elle les objectifs fixés?", radioName: 'goal-completion'},
    {question: "À quel point le comportement de la personne est-il professionnel et respectueux au sein de l'entreprise?", radioName: 'behaviour'}
  ];

  reviewColumns = ['Question', 'notAllSatisfied', 'notSatisfied', 'noOpinion', 'satisfied', 'verySatisfied']

}
