import { LocalStorageService } from './../local-storage.service';
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
  constructor(private itemService: ItemsService, private localStorage: LocalStorageService) { 
    this.items = this.itemService.itemList;
    this.cartList = this.itemService.productsInCart
  }

  ngOnInit(): void {
    this.localStorage.loadFromLocalStorage
  }
  addToCart(currentItem: any) {
      if (this.itemService.productsInCart.includes(currentItem)) {
        alert("item ja adicionado")
      } else {
      this.itemService.addToCartList(currentItem)
      }
    }
  
  getImage(){
    for(let index in this.items) {
      return this.items[index].imageURL || 'erro';
    }
    return
  }
}
