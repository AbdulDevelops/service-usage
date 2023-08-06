import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
@Input() users:any[]=[];
@Output() setToActivating = new EventEmitter<number>()

  onSetToActive(id: number){
    this.setToActivating.emit(id)

  }

}
