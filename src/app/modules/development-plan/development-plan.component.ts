import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { AddPlanDialogComponent } from './add-plan-dialog/add-plan-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-development-plan',
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
  templateUrl: './development-plan.component.html',
  styleUrl: './development-plan.component.scss'
})
export class DevelopmentPlanComponent {

  readonly dialog = inject(MatDialog)
  planData: any;

  openDialog() {
    const dialogRef = this.dialog.open(AddPlanDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.planData = res
    });
  }

  // objectiveDetailDataSource = [
  //   {objectiveTitle: 'Increase Sales Revenue', startDate: '2024-01-01', endDate: '2024-03-31', managerScore: 'Manager Score', selfScore:'Self score', employeeResponse: 'I believe this is achievable...', managerResponse: 'Agreed, let\'s ensure we have....'},
  //   {objectiveTitle: 'Increase Sales Revenue', startDate: '2024-01-01', endDate: '2024-03-31', managerScore: 'Manager Score', selfScore:'Self score', employeeResponse: 'I believe this is achievable...', managerResponse: 'Agreed, let\'s ensure we have....'},
  //   {objectiveTitle: 'Increase Sales Revenue', startDate: '2024-01-01', endDate: '2024-03-31', managerScore: 'Manager Score', selfScore:'Self score', employeeResponse: 'I believe this is achievable...', managerResponse: 'Agreed, let\'s ensure we have....'}
  // ]

  // objectiveDetailColumns: string[] = ['#', 'Objective Title', 'Start Date', 'End Date', 'Manager Score', 'Self Score', 'Employee Response', 'Manager Response']

  developmentPlanDataSource: any = [
    {skill: 'IT', action: 'pending', timeline: 'Start', startDate: '28 Dec 2023', endDate:'25 Feb 2024', resources: 'Human Resource', successCriteria: '100%'}
  ]

  developmentPlanColumns = ['Skill', 'Action', 'Timeline', 'Start Date', 'End Date', 'Resources', 'Success Criteria'];

  developmentHistoryDataSource: any = [
    {year: '2023'},
    {year: '2024'},
    {year:'2023'}
  ]

  developmentHistoryColumns: string[] = ['#', 'Year', 'View']
}
