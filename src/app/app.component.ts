import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {

  constructor() {
    this.setStatusBar();
  }
  
  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    document.body.classList.toggle('dark', theme === 'dark');
  }

  async setStatusBar() { 
    await StatusBar.setBackgroundColor({ color: '#0000' }); 
    await StatusBar.setStyle({ style: Style.Default }); 
  }
  

}
