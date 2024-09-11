import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AddServiceDialogComponent } from './add-service-dialog/add-service-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-services',
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
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  readonly dialog = inject(MatDialog)
  httpService = inject(HttpService)
  divisionData: any = [];
  serviceData: any = [];
  serviceDataSource: any = [];

  ngOnInit(): void {
    this.fetchDptData()
  }

  fetchData() {
    this.httpService.httpGetReq('getallservices').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      console.log(this.divisionData);

      if(res){
        res.data.map((service:any) => {
          const serviceObj = {
            serviceName: service.ServiceName,
            description:  service.Description,
            departmentId: service.DepartmentId,
            createdAt: service.CreatedAt,
            updatedAt: service.UpdatedAt
          }
          this.serviceData.push(serviceObj)
        })
        this.serviceDataSource = this.serviceData
      }
    })
  }
  // getDptName(dptID:any) {
  //   return this.divisionData.find((dpt:any) =>  dpt.id === dptID).department
  // }

  fetchDptData() {
    this.httpService.httpGetReq('getalldivisions').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((dept:any) => {
          const deptObj = {
            departmentId: dept.DivisionId,
            department: dept.DivisionName,
            director : dept.Director || "John Doe",
            createdAt:  dept.CreatedAt,
            updatedAt: dept.UpdatedAt
          }
          this.divisionData.push(deptObj)
        })
        this.fetchData()
        // this.deptDataSource = this.divisionData
      }
      console.log(this.divisionData);
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddServiceDialogComponent);
    dialogRef.componentInstance.divisionData = this.divisionData;

    dialogRef.afterClosed().subscribe(res => {
      this.serviceData = res
      if (this.serviceData) this.addService(this.serviceData);
    });
  }
  addService(service: any) {
    // this.servicesDataSource = [...this.servicesDataSource, service]
  }
  

  // servicesDataSource = [
  //   {serviceName: 'Employee Recruitment', description: 'Managing the hiring process and onboarding new employees.', departmentId: '1', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
  //   {serviceName: 'Payroll Management', description: 'Handling employee salaries and benefits.', departmentId: '2', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
  //   {serviceName: 'IT Support', description: 'Providing technical support and managing IT infrastructure.', departmentId: '3', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
  //   {serviceName: 'Digital Marketing', description: 'Creating and managing online marketing campaigns.', departmentId: '4', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
  //   {serviceName: 'Sales Strategy', description: 'Developing strategies to improve sales and meet targets.', departmentId: '5', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
  //   {serviceName: 'Operational Efficiency', description: 'Streamlining operations to enhance productivity.', departmentId: '6', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
  //   {serviceName: 'Product Development', description: 'Researching and developing new products.', departmentId: '7', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
  //   {serviceName: 'Customer Support', description: 'Assisting customers with their inquiries and issues.', departmentId: '8', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
  //   {serviceName: 'Legal Advisory', description: 'Providing legal advice and handling legal matters.', departmentId: '9', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
  // ]

  servicesColumns: string[] = ['#', 'Service Name', 'Description', 'Department ID', 'Created At', 'Updated At', 'Actions']
  
}
