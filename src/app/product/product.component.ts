import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  name: string="A1";
  count: number=0;
  image: string;
  price:number=0;

  increment(){
    ++this.count;
  }

  decrement(){
    ++this.count;
  }

}
