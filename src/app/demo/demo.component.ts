import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  items = ['Eduard', 'Clark', 'Bruce','Diana', 'Tony'];

  fruits = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  power = 10;

  constructor() { }

  addItem(){
    this.items.push(this.title);
  }

  deleteItem(index:number){
    this.items.splice(index,1);
  }

  ngOnInit(): void {
    console.log('DemoComponent onInit');
  }

}
