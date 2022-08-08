import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DefaultLayoutModule } from './layouts/default-layout/default-layout.module';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  {
    path: '/admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
      }]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./layouts/default-layout/default-layout.module').then(x => x.DefaultLayoutModule)}
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
