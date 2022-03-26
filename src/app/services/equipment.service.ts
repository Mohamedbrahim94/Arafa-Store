import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipment';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  equipments: Equipment[] = [
    new Equipment(
      1,
      'Equip 1',
      'FD30',
      'Forklift',
      'TCM',
      '3 TON',
      'GS-2354',
      125000
    ),
    new Equipment(
      2,
      'Equip 2',
      'FD30',
      'Generator',
      'TCM',
      '80 KVA',
      'GN-3694',
      375000
    ),
    new Equipment(
      3,
      'Equip 3',
      'LM598',
      'Crane',
      'FAUN',
      '60 TON',
      'TSF-5870',
      1200000
    ),
    new Equipment(
      4,
      'Equip 4',
      'FD50',
      'Forklift',
      'CAT',
      '5 TON',
      'DP-9734',
      470000
    ),
    new Equipment(
      5,
      'Equip 5',
      'PM-65',
      'PUMP',
      'Cornel',
      '7M',
      'PMS-23984',
      360000
    ),
    new Equipment(
      6,
      'Equip 6',
      'CM-25',
      'Compressor',
      'Atlas Copco',
      '30 bar',
      'CM-8754',
      680000
    ),
    new Equipment(
      7,
      'Equ 7',
      'CM-2564',
      'Welding Machine',
      'Miller',
      '80KW',
      'WD-54',
      300000
    ),
  ];
  constructor() {}

  //CRUD , a get method should return all equipments list
  //Todo >> remember to get product from an API >> backend section
  getEquipments(): Equipment[] {
    return this.equipments;
  }
}
