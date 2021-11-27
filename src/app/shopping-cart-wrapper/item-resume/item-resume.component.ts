import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-resume',
  templateUrl: './item-resume.component.html',
  styleUrls: ['./item-resume.component.css']
})
export class ItemResumeComponent implements OnInit {
@Input() name: string = '';
@Input() price: number = 0;
@Input() description: string = '';



constructor() { }

  ngOnInit(): void {
  }

}
