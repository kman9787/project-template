import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.user = new User();
  }

  onSubmit() {
    this.authService.login(this.user.name, this.user.authToken)
      .subscribe(result => {
        if(result){
          console.log("login success");
          this.gotoHome();
        } else {
          console.log("login failed");
        }
    })
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }
}
