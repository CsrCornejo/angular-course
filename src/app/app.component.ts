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

  person = {
    name: "Cesar",
    age: 18,
    avatar: "https://cataas.com/cat"
  }
}
