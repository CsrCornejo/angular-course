import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Can use private on variables here
  // private name = 'Cesar';
  name = 'Cesar';
  age = 18;
  img = 'https://cataas.com/cat';

  btnDisabled = true;

  // name: (string |number) [] = [];
  names: string[] = ['Cesar', 'Juli', 'Mario'];
  newName: string = "";

  person = {
    name: "Cesar",
    age: 18,
    avatar: "https://cataas.com/cat"
  }

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
}
