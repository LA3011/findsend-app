import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonInput, IonAvatar, IonItem, IonLabel, IonToggle, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOut, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'config.page.html',
  styleUrls: ['config.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonInput, IonAvatar, IonItem, IonLabel, IonToggle, RouterModule],
})
export class ConfigPage implements OnInit{

  constructor() {
    addIcons({ logOut, logOutOutline })
  }

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
