import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CalenderComponent } from '../../shared-component/calender/calender.component';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { AddTrainingComponent } from './add-training/add-training.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    CalenderComponent,
    CommonTableComponent,
    TranslateModule
  ],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {
  readonly dialog = inject(MatDialog)
  trainingData: any;

  openDialog() {
    const dialogRef = this.dialog.open(AddTrainingComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.trainingData = res
      if (this.trainingData) this.addTraining(this.trainingData);
    });
  }
  addTraining(training: any) {
    this.trainingDataSource = [...this.trainingDataSource, training]
  }
  trainingDataSource = [
    {employeeId: '1111', fullName: 'John Doe', course: 'Employee Welfare', startDate: '12 Jan 2022', endDate: '15 Jan 2022'},
    {employeeId: '1111', fullName: 'John Doe', course: 'Employee Welfare', startDate: '12 Jan 2022', endDate: '15 Jan 2022'},
    {employeeId: '1111', fullName: 'John Doe', course: 'Employee Welfare', startDate: '12 Jan 2022', endDate: '15 Jan 2022'}
  ]

  trainingColumns: string[] = ['#', 'Employee ID',	'Full Name',	'Course',	'Start Date', 'End Date',	'Actions']
  
}
