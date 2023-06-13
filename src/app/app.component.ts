import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  // Can also have private , but won t be usable on html render
  toggleButton () {
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
}
