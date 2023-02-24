import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'databin-assignment';
  EvenArray: number[] = [];
  OddArray: number[] = [];
constructor(){

}

  ngOnInit(){

  }
  AddEvenNode(evenNumber:number){
    this.EvenArray.push(evenNumber);
  }
  AddOddNode(oddNumber:number){
    this.OddArray.push(oddNumber);
  }
}
