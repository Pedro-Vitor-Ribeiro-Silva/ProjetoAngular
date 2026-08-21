import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import { Cultura } from './components/cultura/cultura';
import { Regioes } from './components/regioes/regioes';

@Component({
  selector: 'app-root',

  imports: [
    Header,
    Hero,
    Cultura,
    Regioes,
    Footer
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}