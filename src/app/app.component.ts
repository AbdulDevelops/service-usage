import { Component } from '@angular/core';
import { UsersServiceService } from './users-service.service';
import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-usage';
  activeUsers=['Sherry', 'Henry']
  inactivUsers=['Anna', 'Methew']

  constructor(private userService:CountService){

  }
  onSettingInactive(id: number){
    this.inactivUsers.push(this.activeUsers[id])
  this.activeUsers.splice(id, 1)
  this.userService.clickIncrement()
  //this.onClickCount();
  }
  onSettingActive(id:number){
    this.activeUsers.push(this.inactivUsers[id])
    this.inactivUsers.splice(id, 1)
    this.userService.clickIncrement()
    //this.onClickCount()
  }

   getClick(){
    return this.userService.getClick()


    }


  }


