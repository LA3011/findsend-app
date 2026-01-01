import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonText } from '@ionic/angular/standalone';
import { ListOperatorComponent } from './components/list-operator/list-operator.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [ IonText, ListOperatorComponent ]

})
export class NotificationsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
