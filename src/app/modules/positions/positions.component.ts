import { Component, inject } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { AddPositionsComponent } from './add-positions/add-positions.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-positions',
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
  templateUrl: './positions.component.html',
  styleUrl: './positions.component.scss'
})
export class PositionsComponent {

  readonly dialog = inject(MatDialog)
  positionData: any= []
  httpService= inject(HttpService)
  positionDataSource:any = []
  departmentData: any = []

  ngOnInit(): void {
    this.fetchDptData()
  }

  fetchData() {
    this.httpService.httpGetReq('getallpositions').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((position:any) => {
          const positionObj = {
            department: this.departmentData.find((dpt:any) =>  dpt.departmentId === position.DepartmentId).department,
            positionTitle: position.Title,
            positionCode:  position.PositionCode,
            noOfPositions: position.NumberOfPosition
          }
          this.positionData.push(positionObj)
        })
        this.positionDataSource = this.positionData
      }
    })
  }
  getDptName(dptID:any) {
    return this.departmentData.find((dpt:any) =>  dpt.id === dptID).department
  }


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
          this.departmentData.push(deptObj)
        })
        this.fetchData()
        // this.deptDataSource = this.departmentData
      }
      console.log(this.departmentData);
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPositionsComponent);
    dialogRef.componentInstance.departmentData = this.departmentData
    dialogRef.afterClosed().subscribe(res => {
      this.positionData = res
      if (this.positionData) this.addposition(this.positionData);
    });
  }

  // positionsDataSource = [
  //   {department: 'Human Resources', positionTitle: 'HR Manager', positionCode: 'Manager', noOfPositions: '4'},
  //   {department: 'Human Resources', positionTitle: 'HR Manager', positionCode: 'Manager', noOfPositions: '4'},
  //   {department: 'Human Resources', positionTitle: 'HR Manager', positionCode: 'Manager', noOfPositions: '4'},
  //   {department: 'Human Resources', positionTitle: 'HR Manager', positionCode: 'Manager', noOfPositions: '4'},
  // ]

  positionsColumns: string[] = ['#', 'Department',	'Position Title',	'Position Code',	'No Of positions', 'Actions']
  
  addposition(position: any) {
    // this.positionsDataSource = [...this.positionsDataSource, position]
  }
}
