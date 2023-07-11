import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

  private message: string;

  constructor(private userService: UserServiceService){
    this.message = "";
  }

  ngOnInit(): void {
    this.userService.homeMessage().subscribe(message => {
      console.log("message: ", message);
      this.message = message;
    })
  }

  get getMessage(){
    return this.message;
  }
}
