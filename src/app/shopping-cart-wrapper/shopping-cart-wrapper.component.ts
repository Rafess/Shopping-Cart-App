import { LocalStorageService } from './../local-storage.service';
import { Products } from './../models/products';
import { ItemsService } from './../items.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators, ValidationErrors, AbstractControl} from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-shopping-cart-wrapper',
  templateUrl: './shopping-cart-wrapper.component.html',
  styleUrls: ['./shopping-cart-wrapper.component.css']
})
export class ShoppingCartWrapperComponent implements OnInit {
  @Input() items!: any;
  totalPrice: number = 0;
  totalAmount: number = 0;
  itemsInCart: Products[] = [];
  selectedItems: Products[] = [];
  user: User = new User('','','');
  userForm: FormGroup;
  words: string = "@";
  ngOnInit(): void{
    this.updateAmount(1);
    this.updatePrice();
  };

  constructor(private localStorageService: LocalStorageService, private itemsService: ItemsService) {
    this.itemsInCart = this.itemsService.productsInCart;
    this.selectedItems = this.itemsService.selectedItems;
    console.log(this.itemsInCart)

    this.userForm = new FormGroup({
      'username': new FormControl(this.user.name,
        [Validators.required,
        Validators.minLength(3),
      ]
        ),
        "email": new FormControl('', [ 
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*") 
      ])
    })
  }
  get username() { return this.userForm.get('username')}
  get email() { return this.userForm.get('email')}
  
  ngOnChanges(): void {
    this.totalAmount = 0
    this.totalPrice = 0
    this.updatePrice();
    this.updateAmount(1)
  }
  updateAmount(option: any){
    for(let item of this.selectedItems){
      this.totalAmount += (item.amount * parseInt(option))
      console.log(option)
    }
  }
  updatePrice(): number{
    for(let item of this.selectedItems){
      this.totalPrice += (+item.amount * +item.price)
    }
    return this.totalPrice
  }
  submit() {
    this.localStorageService.clearStorage()
    this.totalAmount = 0;
    this.totalPrice = 0;
    this.itemsInCart = [];
    this.selectedItems  = [];
  }  
  }