import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private userService:UsersServiceService){}

@Input() users:string[]|any;
@Output() userSetToInActive = new EventEmitter<number>();


  onSetToInactive(id:number){
 this.userSetToInActive.emit(id);
 //this.userService.push('user')

  }

  ngOnInit(): void {
    //this.users= this.userService.getUser()
  }
}
