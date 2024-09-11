import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment.development';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UserService } from '../app/shared-component/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userService = inject(UserService)


  getAuthToken() {
        return localStorage.getItem('hrx_auth_token')
  }

  constructor(private http: HttpClient,private router: Router) { }

  LogInUser(creds:any){
    this.http.post(environment.API_URL+'login',{...creds,LoginType:'web'}).pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      if(res){
        localStorage.setItem('hrx_auth_token',res.token)
        const user = res.user.foundUser
        localStorage.setItem('hrx_user',JSON.stringify(user))
        this.userService.changeUser(user.RoleId);
        this.router.navigateByUrl('/overview')
      }
    })
  }

  isTokenExpired(token: string): boolean {
    const decoded: any = jwtDecode(token)
    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decoded.exp);
    return expirationDate < new Date();
  }

  logOutUser() {
    localStorage.removeItem('hrx_auth_token');
    localStorage.removeItem('hrx_user');
    this.router.navigateByUrl('/')
  }
}