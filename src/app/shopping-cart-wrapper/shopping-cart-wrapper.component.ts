import { IItem } from './../models/interface';
import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-wrapper',
  templateUrl: './shopping-cart-wrapper.component.html',
  styleUrls: ['./shopping-cart-wrapper.component.css']
})
export class ShoppingCartWrapperComponent implements OnInit {
  itemList: IItem[] = [];
  constructor(private itemService: ItemsService) { }

  async ngOnInit(): Promise<void> {
    await this.itemService.initializeLit();
    this.itemList = this.itemService.itemList;
  }

}
