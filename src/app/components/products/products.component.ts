import { Component, OnInit } from '@angular/core';
import { Product, CreateProductDTO } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 1, 21);

  showProductDetail = false;

  productChosen: Product = {
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

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) { this.myShoppingCart = this.storeService.getShoppingCart(); }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.productsService.getProduct(id)
    .subscribe(data => {
      this.productChosen = data;
      this.toggleProductDetail();
    });
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nueo producto',
      description: 'bla bla bla ',
      images: [`https://loremflickr.com/640/480`],
      price: 1000,
      categoryId: 1
    }

    this.productsService.create(product)
    .subscribe(data => {
      console.log('create', data);
      this.products.unshift(data);
    });
  }
}
