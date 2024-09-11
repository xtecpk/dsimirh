import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    CommonTableComponent,
    TranslateModule
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  reviewSourceData = [
    {name : 'Taylor swift', reviewers: 'John Doe, Bruce wayne', rating: '5'},
    {name : 'Margorret Robbie', reviewers: 'John Doe, Bruce wayne', rating: '5'},
    {name : 'Lgartha', reviewers: 'John Doe, Bruce wayne', rating: '5'},
  ]

  reviewColumns: string[] = ['#','Name', 'Reviewers',	'Rating',	'Actions']

  employeeSourceData = [
    {name : 'Taylor swift', patientFeedback: '100', employeeFeedback: '90'},
    {name : 'John Doe', patientFeedback: '80', employeeFeedback: '10'},
    {name : 'Smith Jones', patientFeedback: '90', employeeFeedback: '80'},
    {name : 'Arianne Larose', patientFeedback: '100', employeeFeedback: '100'},
    {name : 'Mason Die', patientFeedback: '50', employeeFeedback: '90'}
  ]

  employeeColumns: string[] = ['#','Name', 'Patient Feedback',	'Employee Feedback']
  

}
