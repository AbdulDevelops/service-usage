import { CountService } from '../count.service';
import { UsersServiceService } from './../users-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users:string[]|any;


constructor(private userService: UsersServiceService, private counterService:CountService){

}
ngOnInit(): void {

  this.users = this.userService.inactivUsers;

}

  onSetToActive(id: number){
this.userService.onSettingActive(id);
this.counterService.clickIncrementActive()
  }



}
