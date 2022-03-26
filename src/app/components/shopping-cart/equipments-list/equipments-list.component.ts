import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/models/equipment';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-equipments-list',
  templateUrl: './equipments-list.component.html',
  styleUrls: ['./equipments-list.component.css'],
})
export class EquipmentsListComponent implements OnInit {
  equipmentsList: Equipment[] = [];
  //Using dependency injection
  constructor(private equipmentService: EquipmentService) {}

  ngOnInit() {
    this.equipmentsList = this.equipmentService.getEquipments();
  }
}
