import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bozz-calendar',
  templateUrl: './bozz-calendar.component.html',
  styleUrls: ['./bozz-calendar.component.scss'],
})
export class BozzCalendarComponent implements OnInit {
  @Input() months?: any = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  @Input() week? = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  private date = new Date();
  public year = this.date.getFullYear();
  public month = this.date.getMonth();
  public today = new Date();
  public todayDay = this.today.getDate();
  public todayMonth = this.today.getMonth();
  public todayYear = this.today.getFullYear();
  public daysMonth: any[] = [];
  @Input() dates?: any = [];

  ngOnInit(): void {
    this.getDaysMonth();
  }

  private getDaysMonth() {
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
    let date = new Date(this.year, this.month, 1);
    let dateLast = new Date(this.year, this.month + 1, 0);
    let days = [];
    //cria dias mes anterior
    for (let i = date.getDay(); i > 0; i--) {
      days.push({
        number: null,
        status: null,
        bg: null,
        color: null,
      });
    }
    //cria dias mes atual
    while (date.getMonth() === this.month) {
      let equal = false;
      let d1 =
        date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
      if (this.dates.length !== 0) {
        this.dates.map((res: any) => {
          let d2 =
            res.date.getFullYear() +
            '/' +
            res.date.getMonth() +
            '/' +
            res.date.getDate();
          if (d1 === d2) {
            equal = true;
            days.push({
              number: date.getDate(),
              status: res.status,
              bg: res.bg,
              color: res.color,
            });
          }
        });
      }
      if (equal === false) {
        days.push({
          number: date.getDate(),
          status: null,
          bg: null,
          color: null,
        });
      }

      date.setDate(date.getDate() + 1);
    }
    //cria dias mes posterior
    for (let i = dateLast.getDay(); i < 6; i++) {
      days.push({
        number: null,
        status: null,
        color: null,
      });
    }
    this.daysMonth = days;
  }

  public changePrevMonth() {
    if (this.date.getMonth() == 0) {
      this.date = new Date(this.date.getFullYear() - 1, 11, 1);
    } else {
      this.date = new Date(
        this.date.getFullYear(),
        this.date.getMonth() - 1,
        1
      );
    }
    this.getDaysMonth();
  }

  public changeNextMonth() {
    if (this.date.getMonth() == 11) {
      this.date = new Date(this.date.getFullYear() + 1, 0, 1);
    } else {
      this.date = new Date(
        this.date.getFullYear(),
        this.date.getMonth() + 1,
        1
      );
    }
    this.getDaysMonth();
  }
}
