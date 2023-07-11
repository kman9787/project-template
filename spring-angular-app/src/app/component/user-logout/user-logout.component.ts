import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService){

  }

  ngOnInit(): void {
    this.authService.logout();
  }

}
