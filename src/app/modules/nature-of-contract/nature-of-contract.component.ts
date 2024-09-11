import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AddContractDialogComponent } from './add-contract-dialog/add-contract-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-nature-of-contract',
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
  templateUrl: './nature-of-contract.component.html',
  styleUrl: './nature-of-contract.component.scss'
})
export class NatureOfContractComponent {

  httpService= inject(HttpService)
  readonly dialog = inject(MatDialog)
  contractData: any = [];
  contractDataSource: any =[]

  openDialog() {
    const dialogRef = this.dialog.open(AddContractDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.contractData = res
      if (this.contractData) this.addContract(this.contractData);
    });
  }
  addContract(contract: any) {
    // this.contractDataSource = [...this.contractDataSource, contract]
  }


  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpService.httpGetReq('getallcontracts').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((contract:any) => {
          const contractObj = {
            contractName: contract.ContractTypeName,
            description : contract.Description ,
            createdAt:  contract.CreatedAt
            // updatedAt: contract.UpdatedAt	
          }
          this.contractData.push(contractObj)
        })
        this.contractDataSource = this.contractData
      }
    })
  }

// contractDataSource = [
//   {contractName: 'Service Level Agreement', description: 'Defines service standards and expectations.', createdAt: '01 Jan, 2023'},
//   {contractName: 'Employment Contract', description: 'Details terms of employment for staff members.', createdAt: '01 Feb, 2023'},
// ]

  contractColumns: string[] = ['#', 'Contract Name', 'Description', 'Created At', 'Actions']
  
}
