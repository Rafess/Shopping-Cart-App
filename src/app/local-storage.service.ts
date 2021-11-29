import { Injectable } from '@angular/core';
import { Products } from './models/products';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
    constructor(){}
    verifyStorage(id: number) :number{
        const itemsFromLocalStorage: any[] = JSON.parse(localStorage.getItem("selectedItems") ?? '[]')
        const indexOfCurrentProduct = itemsFromLocalStorage.findIndex( currentId => currentId.id === id)
        return indexOfCurrentProduct
      }
      loadFromLocalStorage(){
        const itemsFromLocalStorage: any[] = JSON.parse(localStorage.getItem("selectedItems") ?? '[]')
        return itemsFromLocalStorage
      }
      addToLocalStorage(items: any[]){
        localStorage.setItem("selectedItems", JSON.stringify(items))
      }
    
      clearStorage(){
        const itemsFromLocalStorage = this.loadFromLocalStorage()
        itemsFromLocalStorage.forEach(products => products.amount = 0)    
        localStorage.setItem("selectedItems", JSON.stringify(itemsFromLocalStorage))
        localStorage.removeItem("selectedItems")
        localStorage.removeItem("productsInCart")
        }
      }
