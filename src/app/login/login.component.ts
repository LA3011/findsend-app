import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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

  private _router = inject(Router)

  constructor() { 
    addIcons({ lockClosedOutline, personOutline })
  }

  ngOnInit() {}

  navHome(){
    this._router.navigate(['/tabs/findsend/home'])
  }

}
