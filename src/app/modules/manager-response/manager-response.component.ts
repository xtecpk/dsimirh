import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-manager-response',
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
  templateUrl: './manager-response.component.html',
  styleUrl: './manager-response.component.scss'
})
export class ManagerResponseComponent {
  managerResponseDataSource = [
    {objectiveTitleHeheh: 'Increase Sales Revenue', objectiveDescription:'Focus on increasing sales revenue by 20% in the next quarter.', selfComment: 'lorem something', selfAssesment: '78%', status: 'Agreed'},
    {objectiveTitleHeheh: 'Increase Sales Revenue', objectiveDescription:'Focus on increasing sales revenue by 20% in the next quarter.', selfComment: 'lorem something', selfAssesment: '78%', status: 'Disagreed'},
    {objectiveTitleHeheh: 'Increase Sales Revenue', objectiveDescription:'Focus on increasing sales revenue by 20% in the next quarter.', selfComment: 'lorem something', selfAssesment: '78%', status: 'Agreed'}
  ]

  managerResponseColumns: string[] = ['#', 'Objective Title Heheh', 'Objective Description', 'Self Comment', 'Self Assesment', 'Status', 'Actions']

}
