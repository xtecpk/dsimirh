import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { LeaveStatusComponent } from '../../shared-component/leave-status/leave-status.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    CommonTableComponent,
    LeaveStatusComponent,
    TranslateModule,
    ReactiveFormsModule
  ],
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.scss'
})
export class EmployeeProfileComponent implements OnInit {

  
  ngOnInit(): void {
    this.inItForm()
  }


  profileForm! :FormGroup


  


  onSubmit() {
    console.log(this.profileForm.value);
  }
  inItForm(){
    this.profileForm =  new FormGroup({
      employeeId: new FormControl(''),
      fname: new FormControl(''),
      lname: new FormControl(''),
      gender: new FormControl(''),
      title: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      contractNature: new FormControl(''),
      functionalDep: new FormControl(''),
      department: new FormControl(''),
      rank: new FormControl(''),
      lineManager1: new FormControl(''),
      lineManager2: new FormControl(''),
      dirResponsibility1: new FormControl(''),
      dirResponsibility2: new FormControl(''),
      additionalNotes: new FormControl(''),
      subDivision: new FormControl(''),
      categories: new FormControl('')
    })
  }
}
