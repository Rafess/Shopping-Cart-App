import { Injectable } from '@angular/core';
import axios from 'axios';
import { IItem } from './models/interface';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemList: IItem[] = [];
  baseURL: string = 'http://localhost:3040';
  constructor() { }

  async initializeLit() {
    const response = await axios.get(`${this.baseURL}/item`);
    this.itemList = response.data;
  }
}
