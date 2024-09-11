import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AddPrivilegeDialogComponent } from './add-privilege-dialog/add-privilege-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-privileges',
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
  templateUrl: './privileges.component.html',
  styleUrl: './privileges.component.scss'
})
export class PrivilegesComponent {

  httpService= inject(HttpService)
  readonly dialog = inject(MatDialog)
  privilegeData: any = [];
  privilegesDataSource : any = []

  openDialog() {
    const dialogRef = this.dialog.open(AddPrivilegeDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.privilegeData = res
      if (this.privilegeData) this.addPrivilege(this.privilegeData);
    });
  }
  addPrivilege(privilege: any) {
    this.privilegesDataSource = [...this.privilegesDataSource, privilege]
  }


  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpService.httpPostReq('getallprivilege',{}).pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((privilege:any) => {
          const privilegeObj = {
            privilegeName: privilege.PrivilegeName,
            description : privilege.Description ,
            createdAt:  privilege.CreatedAt,
            updatedAt: privilege.UpdatedAt
            // updatedAt: contract.UpdatedAt	
          }
          this.privilegeData.push(privilegeObj)
        })
        this.privilegesDataSource = this.privilegeData
      }
    })
  }

  /*privilegesDataSource = [
    { privilegeName: 'Create User', description: 'Allows user to create new accounts', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024' },
    { privilegeName: 'Delete User', description: 'Allows user to delete existing accounts', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024' },
    { privilegeName: 'Edit Profile', description: 'Allows user to modify their profile information', createdAt: '01 May, 2023', updatedAt: '01 Jan, 2024' },
  ]*/

  privilegesColumns: string[] = ['#', 'Privilege Name', 'Description', 'Created At', 'Updated At', 'Actions']

}
