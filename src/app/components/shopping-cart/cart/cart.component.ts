import { Component, OnInit } from '@angular/core';

import { Equipment } from 'src/app/models/equipment';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Equipment[] = [];
  /* {
       id: 1, 
        equipmentId: 1, 
      equipmentName: 'TCM',
      equipmentQuantity: 2,
      equipmentPrice: 125000,
    },
    {
       id: 2, 
        equipmentId: 2, 
      equipmentName: 'Miler',
      equipmentQuantity: 1,
      equipmentPrice: 80000,
    },
  ]; */

  cartTotal = 0;

  constructor(private msg: MessengerService) {}

  ngOnInit() {
    this.msg.receiveMsg().subscribe((equipment: Equipment | any) => {
      this.addEquipmentToCart(equipment);
    });
  }
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

  emptyCart(equipment: Equipment) {
    let index = this.cartItems.indexOf(equipment);
    this.cartItems.splice(index, 1);
  }

  addEquipmentToCart(equipment: Equipment) {
    let equipmentExist = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === equipment.id) {
        this.cartItems[i].quantity++;
        equipmentExist = true;
        break;
      }
    }

    if (!equipmentExist) {
      this.cartItems.push({
        id: equipment.id,
        name: equipment.name,
        category: equipment.category,
        quantity: 1,
        price: equipment.price,
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });
  }

  /*   if (!equipmentExist) {
        this.cartItems.push({
          id: equipment.id,
          name: equipment.name,
          category: equipment.category,
          quantity: 1,
          price: equipment.price,
        });
      } */
}
