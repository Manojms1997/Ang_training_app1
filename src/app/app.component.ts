import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
