import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';

@Component({
  selector: 'app-collaborators-leaves',
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
  templateUrl: './collaborators-leaves.component.html',
  styleUrl: './collaborators-leaves.component.scss'
})
export class CollaboratorsLeavesComponent {

  employeeTableDataSource = [
    {matricule: '111', fullName: 'John Smith', employee: 'Manager', annualLeaveBalance: '20', requests: 'Permission heure à heure'},
    {matricule: '111', fullName: 'John Smith', employee: 'Manager', annualLeaveBalance: '20', requests: 'Permission jour à jour'},
    {matricule: '111', fullName: 'John Smith', employee: 'Manager', annualLeaveBalance: '20', requests: 'Congé annuel'}
  ];

  employeeTableColumns: string[] = ['#', 'Matricule', 'Full Name', 'Employee', 'Annual Leave Balance', 'Requests', 'Action']
}
