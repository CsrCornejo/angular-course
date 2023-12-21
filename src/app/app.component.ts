import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // imgParent = "https://www.w3schools.com/howto/img_avatar.png";
  imgParent = "";
  showImg = true;

  token = "";

  widthImg = 10;

  // Can use private on variables here
  // private name = 'Cesar';
  name = 'Cesar';
  age = 18;
  img = 'https://cataas.com/cat';

  btnDisabled = true;

  // name: (string |number) [] = [];
  names: string[] = ['Cesar', 'Juli', 'Mario'];
  newName = "";

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

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private filesService: FilesService
  ) {

  }

  createUser() {
    this.usersService.create({
      name: "Sebar",
      email: "sebas@hotmail.com",
      password: "1234543"
    })
    .subscribe(rta => {
      console.log(rta);
    })
  }

  login() {
    this.authService.login("sebas@hotmail.com", "1234543")
    .subscribe(rta => {
      console.log(rta.access_token);
      this.token = rta.access_token;
    })
  }

  getProfile() {
    this.authService.getProfile()
    .subscribe(profile => {
      console.log(profile);
    });
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

  toggleImg() {
    this.showImg = !this.showImg;
  }

  downloadPdf(){
    this.filesService.getFile('my.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
    .subscribe()
  }
}
