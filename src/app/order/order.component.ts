import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class OrderPage  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
