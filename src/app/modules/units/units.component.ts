import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AddUnitDialogComponent } from './add-unit-dialog/add-unit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-units',
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
  templateUrl: './units.component.html',
  styleUrl: './units.component.scss'
})
export class UnitsComponent {

  httpService= inject(HttpService)
  readonly dialog = inject(MatDialog)
  unitData: any = [];
  unitsDataSource: any = []

  openDialog() {
    const dialogRef = this.dialog.open(AddUnitDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.unitData = res
      if (this.unitData) this.addUnit(this.unitData);
    });
  }
  addUnit(unit: any) {
    this.unitsDataSource = [...this.unitsDataSource, unit]
  }

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpService.httpGetReq('getallunits').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((unit:any) => {
          const unitObj = {
            unitName: unit.UnitName,
            description : unit.Description ,
            serviceId: unit.ServiceId,
            createdAt:  unit.CreatedAt,
            updatedAt: unit.UpdatedAt
            // updatedAt: contract.UpdatedAt	
          }
          this.unitData.push(unitObj)
        })
        this.unitsDataSource = this.unitData
      }
    })
  }

  /*unitsDataSource = [
    {unitName: 'Talent Acquisition', description: 'Responsible for recruiting top talent.', serviceId: '1', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
    {unitName: 'Onboarding', description: 'Ensures smooth integration of new hires.', serviceId: '1', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
    {unitName: 'Salary Processing', description: 'Handles monthly salary disbursement.', serviceId: '2', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
    {unitName: 'Benefits Administration', description: 'Manages employee benefits and perks.', serviceId: '2', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
    {unitName: 'Help Desk', description: 'Provides IT support to employees.', serviceId: '3', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
    {unitName: 'Network Management', description: 'Oversees company network infrastructure.', serviceId: '3', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
    {unitName: 'SEO', description: 'Optimizes web content for search engines.', serviceId: '4', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
    {unitName: 'Social Media Marketing', description: 'Manages social media campaigns.', serviceId: '4', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
    {unitName: 'Sales Planning', description: 'Develops sales strategies.', serviceId: '5', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
    {unitName: 'Customer Outreach', description: 'Engages with potential customers.', serviceId: '5', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
  ]*/

  unitsColumns: string[] = ['#', 'Unit Name', 'Description', 'Service ID', 'Created At', 'Updated At', 'Actions']
  
}
