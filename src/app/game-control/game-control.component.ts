import { Component, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
public interivalTimer = interval(1000);
private subscrip: any;

@Output('onCreateEvenTicket') createEvenTicket = new EventEmitter();
@Output('onCreateOddTicket') createOddTicket = new EventEmitter();

  startGame(){
    this.subscrip = this.interivalTimer.subscribe(x=>{

      if(x>0){
        if(x % 2 == 0){
          //even
          this.createEvenTicket.emit(x);
        }
        else{
          //odd
          this.createOddTicket.emit(x);
        }
      }

   });
}

stopGame(){
  if(this.subscrip != null)
  this.subscrip.unsubscribe();
}

}
