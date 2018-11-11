import { Component, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {

  constructor() {
  }

  public toggle = false;
  public focus = false;
  public form1 

  ngOnInit() {
    const form1 = document.querySelector('.form_input_remove');
    const form2 = document.querySelector('.form_filter_remove');

    function removeFilter(e) {
      if (form1 && form2 && !e.target.closest('.form_input, .form_filter')) {
        form1.classList.add('form_none');
        form2.classList.add('form_none');
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
    const form1 = document.querySelector('.form_input_remove');
    const form2 = document.querySelector('.form_filter_remove');
    form1.classList.add('form_block');
    form2.classList.add('form_block');
    this.toggle = !this.toggle;
  }

  onFocus(): void {
    this.focus = true;
  }

}
