import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Equipment } from '../models/equipment';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject();

  constructor() {}
  // msg sent by equipments which is an observer to the cart
  sendMsg(equipment: any) {
    //here we are triggering an event which is sending a message
    console.log(equipment);
    this.subject.next(equipment);
  }

  // msg received by cart which is an observable from the equipments
  receiveMsg() {
    return this.subject.asObservable();
  }
}
