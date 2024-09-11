import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { AddSubDivisionDialogComponent } from './add-sub-division-dialog/add-sub-division-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-sub-division',
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
  templateUrl: './sub-division.component.html',
  styleUrl: './sub-division.component.scss'
})
export class SubDivisionComponent {

  readonly dialog = inject(MatDialog)
  httpService = inject(HttpService);
  departmentData:any = [];
  subDivisionData: any = [];
  subDivisionDataSource: any = [];


  ngOnInit(): void {
    this.fetchDptData()
  }

  fetchData() {
    this.httpService.httpGetReq('getallsubdivisions').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((subDiv:any) => {
          const subDivData = {
            subDivision: subDiv.SubDivisionName,
            assistantDirector:  subDiv.AssistantDirector || 'John Doe',
            division: this.departmentData.find((dpt:any) =>  dpt.departmentId === subDiv.DivisionId).department,
          }
          this.subDivisionData.push(subDivData)
        })
        this.subDivisionDataSource = this.subDivisionData
      }
    })
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
    const dialogRef = this.dialog.open(AddSubDivisionDialogComponent);
    dialogRef.componentInstance.divisionData = this.departmentData;

    dialogRef.afterClosed().subscribe(res => {
      this.subDivisionData = res
      if (this.subDivisionData) this.addSubDivision(this.subDivisionData);
    });
  }
  addSubDivision(subDivision: any) {
    // this.subDivisionsSourceData = [...this.subDivisionsSourceData, subDivision]
  }
  // subDivisionsSourceData = [
  //   {subDivision: 'Sub Division 1', assistantDirector: 'John Doe', division: 'Division 1' },
  //   {subDivision: 'Sub Division 2', assistantDirector: 'John Doe', division: 'Division 2' },
  //   {subDivision: 'Sub Division 3', assistantDirector: 'John Doe', division: 'Division 2' }
  // ]

  subDivisionsColumns: string[] = ['#', 'Sub Division', 'Assistant Director', 'Division']
  
}
