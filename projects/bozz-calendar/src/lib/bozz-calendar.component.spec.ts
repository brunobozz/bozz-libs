import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BozzCalendarComponent } from './bozz-calendar.component';

describe('BozzCalendarComponent', () => {
  let component: BozzCalendarComponent;
  let fixture: ComponentFixture<BozzCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BozzCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BozzCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
