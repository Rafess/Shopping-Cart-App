import { IItem } from './../models/interface';
import { Component, Input, OnInit, Output } from '@angular/core';
import axios from 'axios';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-creator',
  templateUrl: './item-creator.component.html',
  styleUrls: ['./item-creator.component.css']
})
export class ItemCreatorComponent implements OnInit {
@Input() name: string = "";
@Input() price: number = 0;
@Input() description: string= "";
@Input() image: string = "";
@Input() id: string = "";
item;
  constructor() { }
  baseURL = "http://localhost:4200"
  ngOnInit(): void {
  }

  async createItem() {
    
  }
}

