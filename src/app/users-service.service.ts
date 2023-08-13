import { Injectable } from '@angular/core';
import { CountService } from './count.service';
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {


   activeUsers=['Sherry', 'Henry']
  inactivUsers=['Anna', 'Methew']
  constructor(private counterService: CountService){}

  onSettingActive(id:number){
    this.activeUsers.push(this.inactivUsers[id])
  this.counterService.clickIncrementActive();
    this.inactivUsers.splice(id, 1)

  }


   onSettingInactive(id: number){
    this.inactivUsers.push(this.activeUsers[id])
    this.counterService.clickIncrementInActive();
  this.activeUsers.splice(id, 1)}


}
