import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  constructor() {
    this.setStatusBar();
  }

  async setStatusBar() { 
    await StatusBar.setBackgroundColor({ color: '#0000' }); 
    await StatusBar.setStyle({ style: Style.Default }); 
  }

}
