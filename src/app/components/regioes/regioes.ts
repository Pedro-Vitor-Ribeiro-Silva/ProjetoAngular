import { Component } from '@angular/core';

@Component({
  selector: 'app-regioes',

  imports: [],

  templateUrl: './regioes.html',
  styleUrl: './regioes.css'
})
export class Regioes {

  regioes = [
    {
      nome: 'Norte',
      descricao: 'Uma região marcada pela Amazônia, biodiversidade e culturas indígenas.',
      destaque: 'Amazônia'
    },
    {
      nome: 'Nordeste',
      descricao: 'Conhecida por suas festas, ritmos, culinária e forte tradição cultural.',
      destaque: 'Forró'
    },
    {
      nome: 'Centro-Oeste',
      descricao: 'Região de natureza exuberante, cerrado e importantes manifestações culturais.',
      destaque: 'Cerrado'
    },
    {
      nome: 'Sudeste',
      descricao: 'Uma das regiões mais populosas e culturalmente diversas do Brasil.',
      destaque: 'Samba'
    },
    {
      nome: 'Sul',
      descricao: 'Região marcada por diferentes influências culturais e tradições.',
      destaque: 'Tradição'
    }
  ];

}