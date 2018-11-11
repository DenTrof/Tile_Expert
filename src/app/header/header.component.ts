import { Component, AfterViewChecked } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('focusTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.7s', style({ opacity: 1 })),
      ])
    ]),
    trigger('inputTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.7s', style({ opacity: 1 })),
      ])
    ]),
  ]
})
export class HeaderComponent implements AfterViewChecked {

  constructor() {
  }

  public toggle = false;
  public focus = false;

  ngAfterViewChecked() {
    const form1 = document.querySelector('.form_input');
    const form2 = document.querySelector('.form_filter');

    function removeFilter(e) {
      if (form1 && form2 && !e.target.closest('.form_input, .form_filter')) {
        form1.remove();
        form2.remove();
        this.removeEventListener('click', removeFilter);
        ofClick();
      }
    };

    document.addEventListener('click', removeFilter);

    const ofClick = () => {
      this.toggle = false;
      this.focus = false;
    }
  }

  onSearch(): void {
    this.toggle = !this.toggle;
  }

  onFocus(): void {
    this.focus = true;
  }

}
