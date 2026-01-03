import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonInput, IonLabel, IonText, IonButton, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonText, IonLabel, IonInput, IonButton, RouterModule]
})
export class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
