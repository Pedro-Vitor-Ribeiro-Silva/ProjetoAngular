import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',

  imports: [
    Header,
    Hero,
    Footer
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}