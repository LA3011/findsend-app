import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {

  currentRoute?: string;

  constructor(private router: Router) {
    this.setStatusBar();
  }
  
  ngOnInit(): void {
    this.router.events.subscribe(event => { 
      if (event instanceof NavigationEnd) { 
        this.currentRoute = event.urlAfterRedirects.split('/').pop(); 
        
        if(this.currentRoute == "login"){
          document.body.classList.toggle('dark', false);
        
        }else{
          const theme = localStorage.getItem('theme');
          document.body.classList.toggle('dark', theme === 'dark');

        }
      } 
    });

  }

  async setStatusBar() { 
    await StatusBar.setBackgroundColor({ color: '#0000' }); 
    await StatusBar.setStyle({ style: Style.Default }); 
  }
  

}
