import { Component } from '@angular/core';

@Component({
  selector: 'app-header',

  imports: [],

  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  menuAberto = false;

  alternarMenu() {
    this.menuAberto = !this.menuAberto;
  }

}