import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { EmployeeFeedbackDialogComponent } from './employee-feedback-dialog/employee-feedback-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-feedback',
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
  templateUrl: './employee-feedback.component.html',
  styleUrl: './employee-feedback.component.scss'
})
export class EmployeeFeedbackComponent {
  readonly dialog = inject(MatDialog)
  contractData: any;

  openDialog() {
    const dialogRef = this.dialog.open(EmployeeFeedbackDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.contractData = res
      if (this.contractData) this.addContract(this.contractData);
    });
  }
  addContract(contract: any) {
    this.feedbackDataSource = [...this.feedbackDataSource, contract]
  }

feedbackDataSource = [
  {employeeName: 'John Doe', department: 'IT', requestedBy: 'Smith Bob', status: 'Reviewed'},
  {employeeName: 'John Doe', department: 'IT', requestedBy: 'Smith Bob', status: 'Pending'},
  {employeeName: 'John Doe', department: 'IT', requestedBy: 'Smith Bob', status: 'Denied'}
]

  feedbackColumns: string[] = ['#', 'Employee Name', 'Department', 'Requested By', 'Status', 'Actions']
}



// feedbac

// em, dep, 