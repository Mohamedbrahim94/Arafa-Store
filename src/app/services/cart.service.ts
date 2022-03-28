import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-Item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { Equipment } from '../models/equipment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Dependency injection
  constructor(private http: HttpClient) {}

  fetchCartItem(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl);
  }

  addEquipmentToCart(product: Equipment): Observable<any> {
    return this.http.post(cartUrl, { product });
  }
}
