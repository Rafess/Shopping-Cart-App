import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-cart-header',
  templateUrl: './shopping-cart-header.component.html',
  styleUrls: ['./shopping-cart-header.component.css']
})
export class ShoppingCartHeaderComponent implements OnInit {
  filter: string = "";

  filterProduct: Subject<string> = new Subject<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onFilterChange(newValue: string) {
    this.filterProduct.next(newValue);
  }

}
