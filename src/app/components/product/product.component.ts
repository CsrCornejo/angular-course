import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = {
    id: "",
    price: 0,
    images: [],
    title: "",
    category: {
      id: "",
      name: ""
    },
    description: ""
  };

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
  onShowDetail() {
    this.showProduct.emit(this.product.id);
  }
}
