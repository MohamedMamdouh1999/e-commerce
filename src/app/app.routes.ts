import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'public',
        loadChildren: () => import('./public/public-module').then(m => m.PublicModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./user/user-module').then(m => m.UserModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/public'
    }
];
