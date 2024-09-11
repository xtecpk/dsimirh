import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    CommonTableComponent,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent {

  httpService = inject(HttpService);
  staffData: any = [];
  staffDataSource: any = [];

  data: any = {
    departments: [],
    subdivisions: [],
    services: [],
    jobs: [],
    functions: [],
    Rank: [],
    natureOfContract: [],
    LineManager: [],
    role: [],
    categories: []

  };

  constructor(private router: Router) {}
  goToAnotherComponent() {
    this.router.navigate(['/addStaff/'], { state: { data: this.data } });
  }

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpService.httpGetReq('getallstaff').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res: any) => {
      console.log("response", res)
      if (res) {
        res.data.map((staff: any) => {
          const staffObj = {
            employeeId: staff.EmployeeNo,
            name: staff.FirstName,
            department: staff.DepartmentName,
            position: staff.DepartmentName,
            status: staff.Status,
          }
          this.staffData.push(staffObj)
        })
        this.staffDataSource = this.staffData
      }
    })


  }

  /*staffDataSource = [
    {employeeId : '123432321',name: 'Alice', department: 'Human Resource', position: 'HR Manager', status: 'Active'},
    {employeeId : '123432321',name: 'Alice', department: 'Human Resource', position: 'HR Manager', status: 'Active'},
    {employeeId : '123432321',name: 'Alice', department: 'Human Resource', position: 'HR Manager', status: 'Active'},
  ]*/

  staffColumns: string[] = ['#', 'Employee ID', 'Name', 'Department', 'Position', 'Status', 'Actions']

}
