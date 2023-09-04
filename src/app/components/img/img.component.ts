import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/house.jpg'

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log("Loaded hijo");
    this.loaded.emit(this.img);
  }
}
