import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  private clickCountActive: number = 0;
  private clickCountInActive: number = 0;


clickIncrementActive(){
  this.clickCountActive++;
  console.log("to Active is clicked" + this.clickCountActive)
}
clickIncrementInActive() {
   this.clickCountInActive++;
  console.log("to InActive is clicked" +this.clickCountInActive)

}
  constructor() { }
}
