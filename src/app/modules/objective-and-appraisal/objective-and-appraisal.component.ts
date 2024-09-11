import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { AppraisalPopupComponent } from './appraisal-popup/appraisal-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { SuccessPopupComponent } from './success-popup/success-popup.component';
import { UserService } from '../../shared-component/services/user.service';

@Component({
  selector: 'app-objective-and-appraisal',
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
  templateUrl: './objective-and-appraisal.component.html',
  styleUrl: './objective-and-appraisal.component.scss'
})
export class ObjectiveAndAppraisalComponent {
  readonly dialog = inject(MatDialog)
  objectData: any;
  userService = inject(UserService);

  selectedUser: string | undefined;

  ngOnInit() {
    this.userService.currentUser$.subscribe(user => {
      this.selectedUser = user;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppraisalPopupComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.objectData = res
      if (this.objectData) this.addObject(this.objectData);
    });
  }
  addObject(object: any) {
    this.objectiveTableDataSource = [...this.objectiveTableDataSource, object]
  }
  
  objectiveTableDataSource = [
    {year: '2023', objectiveSetting: 'Objectives of this year', status: 'En cours'},
    {year: '2023', objectiveSetting: 'Objectives of this year', status: 'Approuvé'},
    {year: '2023', objectiveSetting: 'Objectives of this year', status: "En attende d'approbation"}
  ];

  objectiveTableColumns: string[] = ['Year', 'Objective Setting', 'Status'];


  objectiveHistoryDataSource = [
    {year: '2023', score: '20'},
    {year: '2024', score: '30'},
    {year: '2023', score: '20'}
  ]

  objectiveHistoryColumns: string[] = ['#', 'Year', 'Score', 'To Consult']
}
