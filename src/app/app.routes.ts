import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.routes').then(m => m.routes) },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
