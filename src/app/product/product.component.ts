import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  @Input()
  public product;

  increment(){
    ++this.product.count;
  }

  decrement(){
    if(this.product.count>0){
    --this.product.count;
    }
  }

  
}
