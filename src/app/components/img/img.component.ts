import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/house.jpg'

  constructor() {
    // Before render
    // NO async -- one time
    console.log("constructor", "imgValue => ", this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Before and while render
    // Change before inputs -- n times
    console.log("ngOnChanges", "imgValue => ", this.img);
  }

  ngOnInit(): void {
    // Before render
    // async - fetch - promises -- one time
    console.log("ngOnInit", "imgValue => ", this.img);
  }

  ngAfterViewInit(): void {
    // After render
    // handler children
    console.log("ngAfterViewInit", "imgValue => ", this.img);
  }

  ngOnDestroy(): void {
    // Delete component
    // handler children
    console.log("ngOnDestroy", "imgValue => ", this.img);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log("Loaded hijo");
    this.loaded.emit(this.img);
  }
}
