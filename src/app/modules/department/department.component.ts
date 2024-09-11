import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AddDeptDialogComponent } from './add-dept-dialog/add-dept-dialog.component';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-department',
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
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent {

  readonly dialog = inject(MatDialog)
  httpService= inject(HttpService)
  deptData: any;
  departmentData:any = []
  deptDataSource = []


  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpService.httpGetReq('getalldivisions').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((dept:any) => {
          const deptObj = {
            department: dept.DivisionName,
            director : dept.Director || "John Doe",
            createdAt:  dept.CreatedAt,
            updatedAt: dept.UpdatedAt	
          }
          this.departmentData.push(deptObj)
        })
        this.deptDataSource = this.departmentData
      }
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddDeptDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.deptData = res
      if (this.deptData) this.addDept(this.deptData);
    });
  }
  addDept(dept: any) {
    // this.deptDataSource = [...this.deptDataSource, dept]
  }


  deptColumns: string[] = ['#', 'Department', 'Director', 'Created At', 'Updated At', 'Actions']
  
}
