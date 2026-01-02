import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonInput, IonAvatar, IonItem, IonLabel, IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'config.page.html',
  styleUrls: ['config.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonInput, IonAvatar, IonItem, IonLabel, IonToggle],
})
export class ConfigPage implements OnInit{
  constructor() {}

  toggleTheme(event: any) {
    const isDark = event.detail.checked;
  
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
  ngOnInit() {
    const theme = localStorage.getItem('theme');
    document.body.classList.toggle('dark', theme === 'dark');
  }
  

  
}
