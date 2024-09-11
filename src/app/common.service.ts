import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { catchError, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpService: HttpService) { }


  getAllRequiredData() {

    let mainData: any = {
      departments:[],
      subdivisions:[],
      services:[],
      jobs:[],
      functions:[],
      natureOfContract:[],
      role:[],
      grades:[],
      users:[]
    }

    const allApis = [
      this.httpService.httpGetReq('getalldivisions'),
      this.httpService.httpGetReq('getallsubdivisions'),
      this.httpService.httpGetReq('getallservices'),
      this.httpService.httpGetReq('getalljob'),
      this.httpService.httpGetReq('getallfunctions'),
      this.httpService.httpGetReq('getallcontracts'),
      this.httpService.httpGetReq('getallrole'),
      this.httpService.httpGetReq('getallgrades'),
      this.httpService.httpGetReq('getallstaff')
    ]

    forkJoin(allApis).pipe(
      catchError((error) => {
        throw error
      })
    ).subscribe((res: any) => {
      const allDivsions = res[0].data
      const allSubDivsions = res[1].data
      const allServices = res[2].data
      const allJobs = res[3].data
      const allFunctions = res[4].data
      const allContracts = res[5].data
      const allRoles = res[6].data
      const allGrades = res[7].data
      const allStaff = res[8].data

      // Divisons Data
      if (allDivsions?.length) {
        allDivsions.map((dept: any) => {
          const deptObj = {
            department: dept.DivisionName,
            departmentId: dept.DivisionId,
            director: dept.Director,
            createdAt: dept.CreatedAt,
            updatedAt: dept.UpdatedAt
          }
          mainData.departments.push(deptObj)
        })
      }

      // Sub Divsions Data
      if (allSubDivsions?.length) {
        allSubDivsions.map((subDiv: any) => {
          const relatedDepartment = mainData.departments.find(
            (dpt: any) => dpt.departmentId === subDiv.DivisionId
          );
          const subDivData = {
            subDivision: subDiv.SubDivisionName,
            subDivisionId: subDiv.SubDivisionId,
            assistantDirector: subDiv.AssistantDirector || 'John Doe',
            division: relatedDepartment ? relatedDepartment.department : 'Unknown Division',
          };
          mainData.subdivisions.push(subDivData);
        });
      }

      // Services Data
      if (allServices?.length) {
        allServices.map((service: any) => {
          const serviceObj = {
            serviceName: service.ServiceName,
            serviceId: service.ServiceId,
            description: service.Description,
            departmentId: service.DepartmentId,
            createdAt: service.CreatedAt,
            updatedAt: service.UpdatedAt
          }
          mainData.services.push(serviceObj)
        })
      }
      // Jobs Data
      if (allJobs?.length){
        allJobs.map((job:any) => {
          const jobObj = {
            department: job.DepartmentName,
            jobTitle : job.JobTitle,
            jobId: job.JobId,
            jobCode: job.JobCode,
            noOfJobs:  job.Vacancies
          }
          mainData.jobs.push(jobObj)
          
        })
      }

      // Functions Data
      if(allFunctions?.length){
        allFunctions.map((func:any) => {
          const functionObj = {
            functionName: func.FunctionName,
            functionId: func.FunctionId,
            description : func.Description,
            createdAt:  func.CreatedAt,
            updatedAt: func.UpdatedAt
          }
          mainData.functions.push(functionObj)
          
        })
      }

      // Nature of Constracts Data
      if(allContracts?.length){
        allContracts.map((contract:any) => {
          const contractObj = {
            contractName: contract.ContractTypeName,
            contractId: contract.ContractTypeId,
            description : contract.Description ,
            createdAt:  contract.CreatedAt
            // updatedAt: contract.UpdatedAt	
          }
          mainData.natureOfContract.push(contractObj)
          
        })
      }

      // Roles Data
      if(allRoles?.length){
        allRoles.map((role:any) => {
          const roleObj = {
            roleName: role.RoleName,
            roleId: role.RoleId,
            description : role.Description ,
            createdAt:  role.CreatedAt,
            updatedAt: role.UpdatedAt
            // updatedAt: contract.UpdatedAt	
          }
          mainData.role.push(roleObj)
          
        })
      }

      // Grades Data
      if(allGrades?.length){
        allGrades.map((grade:any) => {
          const gradeObj = {
            gradeName: grade.GradeName,
            // description:  grade.Description,
            gradeId: grade.GradeId,
            createdAt: grade.CreatedAt,
            updatedAt: grade.UpdatedAt
          }
          mainData.grades.push(gradeObj)
          
        })
      }

      // Staff Data
      if(allStaff?.length){
        allStaff.map((user:any) => {
          const userObj = {
            userName: user.FirstName + ' ' + user.LastName,
            // description:  grade.Description,
            userId: user.EmployeeNo,
            roleId: user.RoleId
          }
          if (userObj.roleId == 2) {
            mainData.users.push(userObj)
          }
        })
      }
    })

    return mainData;
  }
}
