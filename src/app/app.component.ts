import { Component } from '@angular/core';
import { Product } from './models/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // imgParent = "https://www.w3schools.com/howto/img_avatar.png";
  imgParent = "";

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

  widthImg = 10;

  // Can use private on variables here
  // private name = 'Cesar';
  name = 'Cesar';
  age = 18;
  img = 'https://cataas.com/cat';

  btnDisabled = true;

  // name: (string |number) [] = [];
  names: string[] = ['Cesar', 'Juli', 'Mario'];
  newName: string = "";

  register = {
    name: '',
    email: '',
    password: ''
  }

  box = {
    width: 100,
    height: 100,
    background: "red"
  };

  person = {
    name: "Cesar",
    age: 18,
    avatar: "https://cataas.com/cat"
  }

  // Can also have private , but won t be usable on html render
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onChangeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  onAddName() {
    this.names.push(this.newName);
    this.newName = "";
  }

  onDeleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }

  onLoaded(img: string) {
    console.log("log padre ", img);
  }
}
