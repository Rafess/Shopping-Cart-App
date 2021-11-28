import { LocalStorageService } from './../local-storage.service';
import { Products } from './../models/products';
import { ItemsService } from './../items.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-wrapper',
  templateUrl: './shopping-cart-wrapper.component.html',
  styleUrls: ['./shopping-cart-wrapper.component.css']
})
export class ShoppingCartWrapperComponent implements OnInit {
  @Input() items!: any;
  totalPrice: number = 0;
  totalAmount: number = 0;
  itemsInCart: Products[] = []
  ngOnInit(): void{};
  constructor(private localStorageService: LocalStorageService, private itemsService: ItemsService) {
    this.itemsInCart = this.itemsService.itemList;
  }
  ngOnChanges(): void {
    this.totalAmount = 0
    this.totalPrice = 0
    this.updatePrice();
    this.updateAmount()
  }

  updatePrice(): number{
    for(let item of this.itemsInCart){
      this.totalPrice += (+item.amount * +item.price)
    }
    return this.totalPrice
  }

  updateAmount(){
    for(let item of this.itemsInCart){
      this.totalAmount += item.amount
    }
  }

  
  }