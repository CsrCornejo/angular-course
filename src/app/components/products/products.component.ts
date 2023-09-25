import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      id: '1',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '1',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '1',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      id: '1',
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      id: '1',
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];
}
