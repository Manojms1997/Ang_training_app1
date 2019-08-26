import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  products=[
    {name:"A1",price:1000,count:0},
    {name:"A2",price:1000,count:0},
    {name:"A3",price:1000,count:0}
  ];
}
