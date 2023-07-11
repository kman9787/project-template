import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private homeUrl: string;
  private user: User;

  constructor(private http: HttpClient) {
    this.homeUrl = 'http://localhost:8080/hello';
    this.user = new User;
  }

  public homeMessage(): Observable<string>  {
    return new Observable(observer => {
      this.http.get<any>(this.homeUrl)
        .subscribe({
          next: result => {
            observer.next(result['message']);
          },
          error: err => {
            console.error(err);
          },
          complete: () => {
            // nothins yet
          }
        })
    });
  }

  set setAuthenticatedUser(user: User){
    this.user = user;
  }
}
