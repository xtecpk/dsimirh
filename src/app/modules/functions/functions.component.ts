import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AddFunctionDialogComponent } from './add-function-dialog/add-function-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-functions',
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
  templateUrl: './functions.component.html',
  styleUrl: './functions.component.scss'
})
export class FunctionsComponent {
 
  readonly dialog = inject(MatDialog)
  functionData: any = [];
  functionsDataSource: any = []

  httpService = inject(HttpService);

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpService.httpGetReq('getallfunctions').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((func:any) => {
          const functionObj = {
            functionName: func.FunctionName,
            description : func.Description,
            createdAt:  func.CreatedAt,
            updatedAt: func.UpdatedAt
          }
          this.functionData.push(functionObj)
        })
        this.functionsDataSource = this.functionData
        console.log(this.functionsDataSource)
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddFunctionDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.functionData = res
      if (this.functionData) this.addFunction(this.functionData);
    });
  }
  addFunction(dept: any) {
    // this.functionsDataSource = [...this.functionsDataSource, dept]
  }
  
  // functionsDataSource = [
  //   {functionName: 'Recruitment Planning', description: 'Develop and implement recruitment plans and strategies.', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024'},
  //   {functionName: 'Interview Coordination', description: 'Coordinate and schedule interviews with candidates.', createdAt: '12 May, 2023', updatedAt: '01 Jan, 2024'},
  //   {functionName: 'Payroll Processing', description: 'Process payroll and manage salary disbursements.', createdAt: '05 Jun, 2023', updatedAt: '01 Jan, 2024'},
  // ]

  functionsColumns: string[] = ['#', 'Function Name', 'Description', 'Created At', 'Updated At', 'Actions']
  
}
