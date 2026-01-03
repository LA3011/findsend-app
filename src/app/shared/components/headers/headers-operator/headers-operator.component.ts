import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonAvatar, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { notifications } from 'ionicons/icons';
import { IonBadge } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-operator',
  templateUrl: './headers-operator.component.html',
  styleUrls: ['./headers-operator.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonAvatar, IonButton, IonIcon, IonBadge]
})
export class HeaderOperatorComponent  implements OnInit {

  constructor(private _router: Router) { 
    addIcons({ notifications })
  }

  ngOnInit() {}

  navNotifications(){
    this._router.navigate(['/tabs/findsend/notifications']);
  }

}
