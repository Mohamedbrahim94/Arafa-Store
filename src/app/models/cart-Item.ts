import { Equipment } from './equipment';

export class CartItem {
  id: number;
  productId?: number;
  productName: string;
  quantity: number;
  price: number;

  constructor(id: number, product: Equipment, quantity = 1) {
    this.id = id;
    this.productId = product.id;
    this.productName = product.name;
    this.quantity = product.quantity;
    this.price = product.price;
  }
}
