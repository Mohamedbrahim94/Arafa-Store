import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from 'src/app/models/equipment';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-equipments-item',
  templateUrl: './equipments-item.component.html',
  styleUrls: ['./equipments-item.component.css'],
})
export class EquipmentsItemComponent implements OnInit {
  @Input()
  equipmentItem!: Equipment;

  constructor(private msg: MessengerService) {}

  ngOnInit(): void {}

  AddToCartHandler() {
    this.msg.sendMsg(this.equipmentItem);
  }
}
