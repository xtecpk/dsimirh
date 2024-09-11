import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { catchError } from 'rxjs';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-roles',
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
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {

  httpService= inject(HttpService)
  roleData: any = []
  rolesSourceData : any = []

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpService.httpGetReq('getallrole').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((role:any) => {
          const roleObj = {
            roleName: role.RoleName,
            description : role.Description ,
            createdAt:  role.CreatedAt,
            updatedAt: role.UpdatedAt
            // updatedAt: contract.UpdatedAt	
          }
          this.roleData.push(roleObj)
        })
        this.rolesSourceData = this.roleData
      }
    })
  }



  // rolesSourceData = [
  //   {roleName: 'Administrateur', description: 'Administrator with full access to the system', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
  //   {roleName: 'Directeur général', description: 'Manages the overall operations and resources of the company', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
  //   {roleName: 'Directeur RH', description: 'Oversees the human resources department and staff', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
  //   {roleName: 'Responsable Hiérarchique N+1', description: 'First level of management responsible for daily operations', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
  //   {roleName: 'Responsable Hiérarchique N+2', description: 'Second level of management responsible for strategic oversight', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'},
  //   {roleName: 'Employé', description: 'Working level of hierarchy', createdAt: '01 Jan, 2023', updatedAt: '23 May, 2024'}
  // ]

  rolesColumns: string[] = ['#', 'Role Name',	'Description', 'Created At', 'Updated At',	'Actions']
  
}
