import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AddGradeDialogComponent } from './add-grade-dialog/add-grade-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-grades',
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
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.scss'
})
export class GradesComponent {

  httpService= inject(HttpService)
  readonly dialog = inject(MatDialog)
  gradeData: any = [];
  gradeDataSource : any = []

  openDialog() {
    const dialogRef = this.dialog.open(AddGradeDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.gradeData = res
      if (this.gradeData) this.addGrade(this.gradeData);
    });
  }
  addGrade(grade: any) {
    this.gradeDataSource = [...this.gradeDataSource, grade]
  }


  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpService.httpGetReq('getallgrades').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((grade:any) => {
          const unitObj = {
            gradeName: grade.GradeName,
            // description : grade.Description ,
            // serviceId: grade.ServiceId,
            createdAt:  grade.CreatedAt,
            updatedAt: grade.UpdatedAt
            // updatedAt: contract.UpdatedAt	
          }
          this.gradeData.push(unitObj)
        })
        this.gradeDataSource = this.gradeData
      }
    })
  }
  
  /*gradeDataSource = [
    {gradeName: 'Junior', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
    {gradeName: 'Mid', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
    {gradeName: 'Senior', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
    {gradeName: 'Lead', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
    {gradeName: 'Principal', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
    {gradeName: 'Director', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
    {gradeName: 'Vice President', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
    {gradeName: 'President', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
    {gradeName: 'CEO', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
    {gradeName: 'Founder', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
  ]*/

  gradeColumns: string[] = ['#', 'Grade Name', 'Created At', 'Updated At', 'Actions']

}
