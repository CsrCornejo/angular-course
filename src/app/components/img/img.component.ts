import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log("change just image ", this.img);
  }

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/house.jpg';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // Before render
    // NO async -- one time
    console.log("constructor", "imgValue => ", this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Before and while render
    // Change before inputs -- n times
    console.log("ngOnChanges", "imgValue => ", this.img);
    console.log("Changes value ", changes);
  }

  ngOnInit(): void {
    // Before render
    // async - fetch - promises -- one time
    console.log("ngOnInit", "imgValue => ", this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log("run counter");
    // }, 1000);
  }

  ngAfterViewInit(): void {
    // After render
    // handler children
    console.log("ngAfterViewInit", "imgValue => ", this.img);
  }

  ngOnDestroy(): void {
    // Delete component
    // Observables, setTimeout, setInterval can be handled
    console.log("ngOnDestroy", "imgValue => ", this.img);
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log("Loaded hijo");
    this.loaded.emit(this.img);
  }
}
