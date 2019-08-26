import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {

 //Instance Data Members
 count = 0;


 //Instance Methods
 increment(/*this=receive reference of object*/){
   ++this.count;
 }

 decrement(/*this=receive reference of object*/){
   --this.count;
 }

}
