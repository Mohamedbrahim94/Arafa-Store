import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from 'src/app/models/equipment';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-equipments-item',
  templateUrl: './equipments-item.component.html',
  styleUrls: ['./equipments-item.component.css'],
})
export class EquipmentsItemComponent implements OnInit {
  @Input()
  equipmentItem!: Equipment;

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  AddToCartHandler() {
    this.cartService.addEquipmentToCart(this.equipmentItem).subscribe(() => {
      this.msg.sendMsg(this.equipmentItem);
    });
  }
}
