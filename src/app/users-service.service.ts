import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  /* constructor() {
   }
   getUser(){
    return [{
      name:'John',
      adress: 'Hohe Str 65'
    }];
   } */
   activeUsers=['Sherry', 'Henry']
  inactivUsers=['Anna', 'Methew']

   onSettingInactive(id: number){
    this.inactivUsers.push(this.activeUsers[id])
  this.activeUsers.splice(id, 1)}

   onSettingActive(id:number){
    this.activeUsers.push(this.inactivUsers[id])
    this.inactivUsers.splice(id, 1)
  }

}
