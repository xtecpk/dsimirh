import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CalenderComponent } from '../../shared-component/calender/calender.component';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { AddDepartureComponent } from './add-departure/add-departure.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-departure',
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
  templateUrl: './departure.component.html',
  styleUrl: './departure.component.scss'
})
export class DepartureComponent {
  readonly dialog = inject(MatDialog)
  departureData: any;

  openDialog() {
    const dialogRef = this.dialog.open(AddDepartureComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.departureData = res
      if (this.departureData) this.addDeparture(this.departureData);
    });
  }
  addDeparture(departure: any) {
    this.departureDataSource = [...this.departureDataSource, departure]
  }
  departureDataSource = [
    {employeeId: '1111', fullName: 'John Doe', position: 'IT Manager', departureDate: '12 Jan 2022', status: 'Sortant'},
    {employeeId: '1111', fullName: 'John Doe', position: 'IT Manager', departureDate: '12 Jan 2022', status: 'Sortie'},
    {employeeId: '1111', fullName: 'John Doe', position: 'IT Manager', departureDate: '12 Jan 2022', status: 'Désactivé'}
  ]

  departureColumns: string[] = ['#', 'Employee ID',	'Full Name',	'Position',	'Departure Date', 'Status',	'Actions']
  
}
