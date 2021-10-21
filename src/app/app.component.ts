import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bozz-libs';

  public months: any = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Augosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  public week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  dates = [
    {
      date: new Date(2021, 9, 26),
      status: 'Indisponível',
      bg: '#ff4444',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 9, 22),
      status: 'Indisponível',
      bg: '#ff4444',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 9, 21),
      status: 'Indisponível',
      bg: '#ff4444',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 9, 25),
      status: 'Indisponível',
      bg: '#ff4444',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 25),
      status: 'Natal',
      bg: '#22dd88',
      color: '#bb0000',
    },
  ];
}
