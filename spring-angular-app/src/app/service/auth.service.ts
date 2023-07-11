import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = "";
  private loginUrl: string;
  private isAuthenticated: boolean;
  private user: User;

  constructor(private http: HttpClient, private userService: UserServiceService, private router: Router) { 
    this.loginUrl = 'http://localhost:8080/token';
    this.isAuthenticated = false;
    this.user = new User;
  }

  public login(username: string, password: string):Observable<boolean>  {
    return new Observable(observer => {
      this.http.post<any>(this.loginUrl, 
        {
          "username": username,
          "password": password
        }).subscribe({
          next: result => {
            if(!!result['jwt']){
              this.token = result['jwt'];
              this.isAuthenticated = true;
              this.user.name = username;
              this.user.authToken = password;
              this.userService.setAuthenticatedUser = this.user;
              console.log("token: " + this.token);
              observer.next(true);
            } else {
              observer.next(false);
            }
          }, 
          error: err => {
            console.error(err.error);
            observer.next(false);
          }, 
          complete: () => {
            // Nothins yet
          }
        });
    })
  }

  public isUserAuthenticated(): boolean{
    return this.isAuthenticated;
  }

  public logout(){
    this.isAuthenticated = false;
    this.token = "";
    this.router.navigateByUrl("/home");
  }

  get getAuthToken(){
    return this.token;
  }

}
