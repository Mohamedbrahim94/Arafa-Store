export class Equipment {
  id?: number;
  name: string;
  model?: string;
  category?: string;
  manufacturer?: string;
  capacity?: string;
  serialNumber?: string;
  price: number;
  quantity: number;
  imageUrl?: string;

  constructor(
    id: number,
    name: string,
    model = '',
    category = '',
    manufacturer = '',
    capacity = '',
    serialNumber = '',
    price = 0,
    quantity = 1,
    imageUrl = ''
  ) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.category = category;
    this.manufacturer = manufacturer;
    this.capacity = capacity;
    this.serialNumber = serialNumber;
    this.price = price;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
  }
}
