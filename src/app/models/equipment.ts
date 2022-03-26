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
    imageUrl = 'https://th.bing.com/th/id/R.ee79f7140ee52206605212c9742c16b8?rik=gwUP34NNj7b7Dw&pid=ImgRaw&r=0'
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
