import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'findsend',
    component: TabsPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () =>   import('../home/home.page').then((m) => m.HomePage),},
      { path: 'perfil', loadComponent: () =>   import('../perfil/perfil.page').then((m) => m.PerfilPage),},
      { path: 'order', loadComponent: () =>   import('../order/order.component').then((m) => m.OrderPage),},
      { path: 'notifications', loadComponent: () =>   import('../notifications/notifications.component').then((m) => m.NotificationsComponent),},
      { path: 'config', loadComponent: () =>   import('../config/config.page').then((m) => m.ConfigPage),},
      { path: '**', redirectTo: '/login', pathMatch: 'full' }
    ],
  },
  
];
