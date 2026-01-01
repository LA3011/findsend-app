import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonAvatar, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { notificationsOutline } from 'ionicons/icons';
import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-operator',
  templateUrl: './headers-operator.component.html',
  styleUrls: ['./headers-operator.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonAvatar, IonButton, IonIcon, IonBadge, IonRouterLink, RouterLink]
})
export class HeaderOperatorComponent  implements OnInit {

  constructor() { 
    addIcons({ notificationsOutline })
  }

  ngOnInit() {}

}
