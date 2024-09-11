import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { AddObjectDialogComponent } from './add-object-dialog/add-object-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-objective-settings',
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
  templateUrl: './objective-settings.component.html',
  styleUrl: './objective-settings.component.scss'
})
export class ObjectiveSettingsComponent {
  readonly dialog = inject(MatDialog)
  objectData: any;

  openDialog() {
    const dialogRef = this.dialog.open(AddObjectDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.objectData = res
      if (this.objectData) this.addObject(this.objectData);
    });
  }
  addObject(object: any) {
    this.objectDataSource = [...this.objectDataSource, object]
  }
  

  objectDataSource = [
    {objectiveTitleHeheh: 'Increase Sales Revenue', objectiveDescription:'Focus on increasing sales revenue by 20% in the next quarter.', startDate: '01 Jan, 2023', endDate: '23 May, 2024', status: 'Agreed'},
    {objectiveTitleHeheh: 'Increase Sales Revenue', objectiveDescription:'Focus on increasing sales revenue by 20% in the next quarter.', startDate: '01 Jan, 2023', endDate: '23 May, 2024', status: 'Disagreed'},
    {objectiveTitleHeheh: 'Increase Sales Revenue', objectiveDescription:'Focus on increasing sales revenue by 20% in the next quarter.', startDate: '01 Jan, 2023', endDate: '23 May, 2024', status: 'Agreed'}
  ]

  objectColumns: string[] = ['#', 'Objective Title Heheh', 'Objective Description', 'Start Date', 'End Date', 'Status', 'Actions']

  objectiveHistoryDataSource = [
    {year: '2023', score: '20'},
    {year: '2024', score: '30'},
    {year: '2023', score: '20'}
  ]

  objectiveHistoryColumns: string[] = ['#', 'Year', 'Score', 'View']

}
