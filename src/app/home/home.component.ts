import { ItemsService } from './../items.service';
import { Products } from './../models/products';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public items: Products[] = []
cartList: string[] = [];
  constructor(private itemService: ItemsService) { 
    this.items = this.itemService.itemList;
  }

  ngOnInit(): void {
  }
  addToCart(currentItem: any) {
      this.itemService.addToCartList(currentItem)
    }
  
  getImage(){
    for(let index in this.items) {
      return this.items[index].imageURL || 'erro';
    }
    return
  }
}
