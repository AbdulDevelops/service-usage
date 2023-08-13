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


  constructor(private userService:CountService){


   /* getClick(){
    return this.userService.getClick()


    } */


  }

}
