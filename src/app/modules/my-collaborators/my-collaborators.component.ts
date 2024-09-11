import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';

@Component({
  selector: 'app-my-collaborators',
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
  templateUrl: './my-collaborators.component.html',
  styleUrl: './my-collaborators.component.scss'
})
export class MyCollaboratorsComponent {

  employeeTableDataSource = [
    {employeeId: '111', fullName: 'John Smith', employee: 'Manager', phoneNumber: '000-000'},
    {employeeId: '111', fullName: 'John Smith', employee: 'Manager', phoneNumber: '111-111'},
    {employeeId: '111', fullName: 'John Smith', employee: 'Manager', phoneNumber: '222-222'}
  ];

  employeeTableColumns: string[] = ['#', 'Employee ID', 'Full Name', 'Employee', 'Phone Number', 'Action']

}
