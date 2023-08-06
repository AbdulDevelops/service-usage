import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  private clickCount: number = 0;


clickIncrement(){
  this.clickCount++;
}
getClick():number {
  return this.clickCount;
}
  constructor() { }
}
