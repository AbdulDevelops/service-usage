import { InactiveUsersComponent } from './../inactive-users/inactive-users.component';
import { CountService } from './../count.service';
import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {


 users:string[]|any;

 constructor(private userService:UsersServiceService, private counterService:CountService){}

  ngOnInit(): void {
      this.users = this.userService.activeUsers;

  }

  onSetToInactive(id:number){
    this.userService.onSettingInactive(id);
    this.counterService.clickIncrementInActive()
    //this.userService.push('user')

     }
}
