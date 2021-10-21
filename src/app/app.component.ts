import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bozz-libs';

  public colors: any = {
    daysMonthBgColor: '#44ccff',
    daysMonthTxColor: '#ffffff',
    noDaysMonthBgColor: '#ffff00',
    noDaysMonthTxColor: '#0000ff',
    todayTxColor: '#0000ff',
    todayBdColor: '#0000ff',
  };

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
      date: new Date(2021, 9, 25),
      status: 'Unavailable',
      bg: '#ff4949',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 9, 26),
      status: 'Unavailable',
      bg: '#ff4949',
      color: '#ffffff',
    },
  ];
}
