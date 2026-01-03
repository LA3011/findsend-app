import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonInput, IonLabel, IonText, IonButton, IonAvatar, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosedOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonText, IonLabel, IonInput, IonButton, RouterModule, IonAvatar, IonIcon]
})
export class LoginComponent  implements OnInit {

  constructor() { 
    addIcons({ lockClosedOutline, personOutline })
  }

  ngOnInit() {}

}
