import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  authService = inject(AuthServiceService)
  
  constructor(private http: HttpClient) { 
  
  }

  httpGetReq(path:string){
    const headers = this.getAuthToken()
    return this.http.get(environment.API_URL+path,{headers : headers});
  }

  httpPostReq(path:string,postObj:any){
    const user = JSON.parse(localStorage.getItem('hrx_user') || '{}');
    const newBody = {...postObj,UserId:user.uid}
    const headers = this.getAuthToken()
    return this.http.post(environment.API_URL+path,newBody,{headers : headers});
  } 
 

  getAuthToken(){
    let headers : HttpHeaders =  new HttpHeaders()
    const authToken = this.authService.getAuthToken();
    if(this.authService.isTokenExpired(authToken||'') || authToken === ''){
     this.authService.logOutUser();
    }
    return headers.append('Authorization', `Bearer ${authToken}`)
  }


}


