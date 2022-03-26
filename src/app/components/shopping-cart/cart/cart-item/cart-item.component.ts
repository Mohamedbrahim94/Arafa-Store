import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from 'src/app/models/equipment';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any;
  cartItems: Equipment[] = [];

  constructor() {}

  ngOnInit(): void {}

  removeEquipmentFromCart(equipment: Equipment) {
    let equipmentExist = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === equipment.id && this.cartItems.length > 0) {
        this.cartItems[i].quantity--;
        equipmentExist = true;
        break;
      }
    }
  }
}
