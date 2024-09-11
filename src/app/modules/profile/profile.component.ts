import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { title } from 'process';
import { UserService } from '../../shared-component/services/user.service';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatButtonModule,
    TranslateModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  httpService= inject(HttpService)
  profilePic: any = null;
  profileName: string = '';
  isNotAdmin: boolean = false;
  currentUser: string = '' 
  userService = inject(UserService);
  commonSerivce = inject(CommonService)
  isStaffComp: boolean = false;


  data: any = {
    departments: [],
    subdivisions: [],
    services: [],
    jobs: [],
    functions: [],
    Rank: [],
    natureOfContract: [],
    LineManager: [],
    role: [],
    categories: [],
    grades: [],
    users: []

  };

  onPicSelected(event: any): void {
    const file = event.target.files[0];
    this.profileName = file.name;
    if (file) {
      this.profilePic = URL.createObjectURL(file);
    }
    console.log(this.profilePic)
  }

  profileForm! :FormGroup

  constructor(
    private router : ActivatedRoute,
    private rout : Router
  ){
    //Getting the data from staff
    // const navigation = this.rout.getCurrentNavigation();
    // this.data = navigation?.extras?.state?.['data'];
  }

  

  ngOnInit(){
    this.router.params.subscribe( params => {
      this.inItForm(params['formStaff'] === 'true'? true:false)
    })
    this.userService.currentUser$.subscribe(user => {
      this.isNotAdmin = (user == 'admin') ? false : true;
      this.currentUser = user;
      this.inItForm(this.isStaffComp)
    })
    console.log(`data in profile : ${this.data}`)
    this.data = this.commonSerivce.getAllRequiredData()
    const user = JSON.parse(localStorage.getItem('hrx_user') || '{}')
    if(!this.isStaffComp && user){
      this.inItForm(this.isStaffComp,user)
    }
  }
  onSubmit() {
    console.log(this.profileForm.value);
    // debugger

    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      const profileData = {
        EmployeeNo : formData.employeeId,
        Title : formData.title,
        FirstName : formData.fname,
        LastName : formData.lname,
        Gender : formData.gender,
        PhoneNo : formData.phone,
        Email : formData.email,
        Address : formData.address,
        DepartmentId : formData.division,
        SubDivision : formData.subDivision,
        Division : formData.division,
        Services : formData.service,
        JobId : formData.job,
        Functions : formData.function,
        Rank : formData.rank,
        NatureOfContract : formData.contractNature,
        LineManager : formData.lineManager1,
        LineManager2 : formData.lineManager2,
        PSFStartDate: formData.publicServiceDate,
        JoiningDate: formData.joiningDate,
        DOB : formData.DOB,
        Position : formData.employeeId,

      }
      if (!this.isStaffComp) {
        this.httpService.httpPostReq('updatestaff',profileData).pipe(
          catchError(err => {
            throw err
          })
        ).subscribe((responnse : any) =>{
          console.log('responnse',responnse)
        })
      } else {
        this.httpService.httpPostReq('addstaff',profileData).pipe(
          catchError(err => {
            throw err
          })
        ).subscribe((responnse : any) =>{
          console.log('responnse',responnse)
        })
      }
    }
  }

  inItForm(isStaff= true,user :any = null){
    // debugger
    this.isStaffComp = isStaff;
    this.profileForm =  new FormGroup({
      employeeId: new FormControl({value: user?.EmployeeNo || '',disabled : !isStaff}),
      fname: new FormControl({value: user?.FirstName || '', disabled: this.isNotAdmin}),
      lname: new FormControl([user?.LastName || '']),
      gender: new FormControl({value: user?.Gender.toLowerCase() || '', disabled: this.isNotAdmin}),
      dob: new FormControl({value: user?.DOB || '', disabled: this.isNotAdmin}),
      joiningDate: new FormControl({value: user?.JoiningDate || '', disabled: this.isNotAdmin}),
      psfStartDate: new FormControl({value: user?.PSFStartDate || '', disabled: this.isNotAdmin}),
      title: new FormControl(user?.Title || ''),
      address: new FormControl(user?.Address || ''),
      email: new FormControl({value: user?.Email || '', disabled: this.isNotAdmin}),
      phone: new FormControl({value: user?.PhoneNo || '', disabled: this.isNotAdmin}),
      contractNature: new FormControl({value: user?.NatureOfContract || '', disabled: this.isNotAdmin}),
      // functionalDep: new FormControl({value: user?.Functions || '', disabled: this.isNotAdmin}),
      service: new FormControl({value: user?.Services || '', disabled: this.isNotAdmin}),
      division: new FormControl({value: user?.Division || '', disabled: this.isNotAdmin}),
      rank: new FormControl({value: user?.Rank || '', disabled: this.isNotAdmin}),
      lineManager1: new FormControl({value: user?.LineManager || '', disabled: this.isNotAdmin}),
      lineManager2: new FormControl({value: user?.LineManager2 || '', disabled: this.isNotAdmin}),
      // dirResponsibility1: new FormControl({value: user?.EmployeeNo || '', disabled: this.isNotAdmin}),
      // dirResponsibility2: new FormControl({value: user?.EmployeeNo || '', disabled: this.isNotAdmin}),
      subDivision: new FormControl({value: user?.SubDivision || '', disabled: this.isNotAdmin}),
      categories: new FormControl({value: user?.Categories || '', disabled: this.isNotAdmin}),
      // accessRight: new FormControl({value: user?.EmployeeNo || '', disabled: !this.isNotAdmin}),
      job: new FormControl({value: user?.JobId || '', disabled: this.isNotAdmin}),
      role: new FormControl({value: user?.RoleId || '', disabled: this.isNotAdmin}),
      // publicServiceDate: new FormControl({value: user?.EmployeeNo || '', disabled: this.isNotAdmin}),
      // DOB: new FormControl({value: user?.EmployeeNo || '', disabled: this.isNotAdmin}),
      function: new FormControl({value: user?.Functions || '', disabled: this.isNotAdmin})
    })
  }

}