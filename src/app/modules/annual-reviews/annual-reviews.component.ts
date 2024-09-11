import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-annual-reviews',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    DatePipe,
    CommonTableComponent,
    TranslateModule
  ],
  templateUrl: './annual-reviews.component.html',
  styleUrl: './annual-reviews.component.scss'
})
export class AnnualReviewsComponent {
  reviewDataSource = [
    {objectiveTitleHeheh: 'Increase Sales Revenue', objectiveDescription:'Focus on increasing sales revenue by 20% in the next quarter.', startDate: '01 Jan, 2023', endDate: '23 May, 2024', status: 'Agreed'},
    {objectiveTitleHeheh: 'Increase Sales Revenue', objectiveDescription:'Focus on increasing sales revenue by 20% in the next quarter.', startDate: '01 Jan, 2023', endDate: '23 May, 2024', status: 'Disagreed'},
    {objectiveTitleHeheh: 'Increase Sales Revenue', objectiveDescription:'Focus on increasing sales revenue by 20% in the next quarter.', startDate: '01 Jan, 2023', endDate: '23 May, 2024', status: 'Agreed'}
  ]

  reviewColumns: string[] = ['#', 'Objective Title Heheh', 'Objective Description', 'Start Date', 'End Date', 'Status', 'Actions']

}
