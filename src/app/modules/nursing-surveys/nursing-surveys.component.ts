import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SurveyDialogComponent } from '../survey-dialog/survey-dialog.component';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { FeedbackFormDialogComponent } from './feedback-form-dialog/feedback-form-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nursing-surveys',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    CommonTableComponent,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './nursing-surveys.component.html',
  styleUrl: './nursing-surveys.component.scss'
})
export class NursingSurveysComponent {

  readonly dialog = inject(MatDialog)
  surveyData: any;
  feedbackData: any;

  openDialog() {
    const dialogRef = this.dialog.open(SurveyDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.surveyData = res
      // if (this.announcementData) this.addAnnouncement(this.announcementData);
    });
  }

  openFeedbackForm() {
    const dialogRef = this.dialog.open(FeedbackFormDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.feedbackData = res;
    })
  }

  nursingDataSource = [
    {name: 'Patient Assessment', email: 'johndoe@mail.com', phoneNumber: '08012345678', rating: '4', description: 'Medical', createdAt: 'Alice', careGiver: '01 Jan, 2023'},
    {name: 'Patient Assessment', email: 'johndoe@mail.com', phoneNumber: '08012345678', rating: '4', description: 'Medical', createdAt: 'Alice', careGiver: '01 Jan, 2023'},
    {name: 'Patient Assessment', email: 'johndoe@mail.com', phoneNumber: '08012345678', rating: '4', description: 'Medical', createdAt: 'Alice', careGiver: '01 Jan, 2023'},
    {name: 'Patient Assessment', email: 'johndoe@mail.com', phoneNumber: '08012345678', rating: '4', description: 'Medical', createdAt: 'Alice', careGiver: '01 Jan, 2023'},
  ]

  nursingColumns: string[] = ['#', 'Name',	'Email',	'Phone Number',	'Rating',	'Description', 'Created At', 'Care Giver', 'Actions']
  

}

