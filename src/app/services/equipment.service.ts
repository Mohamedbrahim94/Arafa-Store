import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productUrl } from 'src/app/config/api';

/* const apiHost = 'http://localhost:3000/products'; */

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  /* equipments: Equipment[] = [new Equipment(1, 'Equip 1', 'FD30', 'Forklift', 'TCM', '3 TON', 'GS-2354', 125000 )
   new Equipment(2,'Equip 2','FD30','Generator','TCM','80 KVA','GN-3694', 37500),
    new Equipment( 3,'Equip 3','LM598','Crane','FAUN',60 TON','TSF-5870',120000),
    new Equipment(4,'Equip 4','FD50','Forklift','CAT','5 TON','DP-9734', 47000),
    new Equipment(5,'Equip 5','PM-65', 'PUMP','Cornel','7M','PMS-23984',36000),
    new Equipment(6,'Equip 6','CM-25','Compressor','Atlas Copco','30 bar','CM-8754',680000),
    new Equipment( 7,'Equ 7','CM-2564', 'Welding Machine','Miller','80KW','WD-54',30000]; */
  constructor(private http: HttpClient) {}

  //CRUD , a get method should return all equipments list
  //Todo >> remember to get product from an API >> backend section
  getEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(productUrl);
  }
}
