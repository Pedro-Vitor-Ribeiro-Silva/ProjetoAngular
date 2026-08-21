import { Component } from '@angular/core';

@Component({
  selector: 'app-cultura',

  imports: [],

  templateUrl: './cultura.html',
  styleUrl: './cultura.css'
})
export class Cultura {

  culturas = [
    {
      titulo: 'Música',
      descricao: 'Samba, bossa nova, forró e outros ritmos que representam a diversidade brasileira.',
      icone: '🎵'
    },
    {
      titulo: 'Gastronomia',
      descricao: 'Sabores marcantes como feijoada, acarajé, pão de queijo e muitos outros pratos.',
      icone: '🍛'
    },
    {
      titulo: 'Festas',
      descricao: 'Carnaval, festas juninas e celebrações que reúnem pessoas de todo o país.',
      icone: '🎭'
    },
    {
      titulo: 'Arte',
      descricao: 'Literatura, dança, artesanato e expressões artísticas que contam nossa história.',
      icone: '🎨'
    }
  ];

}