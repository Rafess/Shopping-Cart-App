import { LocalStorageService } from './local-storage.service';
import { Products } from './models/products';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
    itemList: Products[] = [{
        id: "1A",
        name: 'TÊNIS SUPERSTAR SLIP-ON',
        price: 199.99,
        imageURL: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/11e6d0f05a2649a28513abf4003700dd_9366/Tenis_Superstar_Slip-On_Vermelho_EX4626.jpg',
        amount: 0,
        }, 
        {
        id: "2A",
        name: 'Tênis NMD_R1 Primeblue',
        price: 799.99,
        imageURL: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/62d96641e799450fbbdfad0800cb06ed_9366/Tenis_NMD_R1_Primeblue_Preto_GZ9256_01_standard.jpg',
        amount: 0,
        },
        {
        id: "3A",
        name: 'Tênis Superstar Arizona',
        price: 499.99,
        imageURL: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/334045c439f344ee8078ac7100a00c9d_9366/Tenis_Superstar_Arizona_Branco_GZ2874_01_standard.jpg',
        amount: 0,
        },
        {
        id: "4A",
        name: 'TÊNIS SUPERSTAR OT TECH',
        price: 599.99,
        imageURL: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/bea8a92f0b6d440d9901ad5e00203fbc_9366/Tenis_Superstar_OT_Tech_Branco_H05649_01_standard.jpg',
        amount: 0,
        },
        {
        id: "5A",
        name: 'NMD_R1',
        price: 799.99,
        imageURL: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3b3fe645626949d38b3dad4901167df9_9366/NMD_R1_Preto_GV8422_01_standard.jpg',
        amount: 0,
        },
        {
        id: "6A",
        name: 'Tênis Entrap Mid',
        price: 349.99,
        imageURL: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/606fae9a0d3a4fd68975ac3900d4bda1_9366/Tenis_Entrap_Mid_Branco_FY5637_01_standard.jpg',
        amount: 0,
        },
      {
        id: "7A",
        name: 'TÊNIS PUIG PRIMEKNIT PRIMEBLUE',
        price: 499.99,
        imageURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/45b0313a15bd422aad44ac7501858b7c_9366/Tenis_Puig_Primeknit_Primeblue_Branco_FY0435_01_standard.jpg",
        amount: 0,
        }];

selectedItems: any[] = [];
productsInCart: any[] = [];
constructor(private localStorageService: LocalStorageService) {
    this.selectedItems = localStorageService.loadFromLocalStorage()
}

verifyItem(item: any): number {
    const index = this.selectedItems.findIndex(currentItem => currentItem.id === item.id)
    return index;
}
addToCartList(item: any) {
    const indexOfItem = this.verifyItem(item)
    if (this.selectedItems.includes(item)) {
        alert ("Item já adicionado");
    } else { if (indexOfItem >= 0) {
        this.selectedItems[indexOfItem].amount = 1;
    } else{
        item.amount = 1;
        this.selectedItems.push(item)
    } }
        console.log(item)
        this.productsInCart.push(item);
        this.selectedItems = this.selectedItems.filter(product => product.amount !== 0)
        this.localStorageService.addToLocalStorage(this.selectedItems)
        this.localStorageService.addToLocalStorage(this.productsInCart)
      }
}
