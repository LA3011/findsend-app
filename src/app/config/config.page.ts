import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'config.page.html',
  styleUrls: ['config.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class ConfigPage {
  constructor() {}
}
