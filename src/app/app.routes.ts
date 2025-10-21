import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guards';
export const routes: Routes = [    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        //canActivate: [AuthGuard],
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) //lazy carga solo cuando navegas a
    },
    {
        path:'calendar',
        //canActivate: [AuthGuard],
        loadComponent: () => import('./pages/calendar/calendar.component').then(m => m.CalendarComponent)
        //component: CalendarComponent  //carga al inicio en buffer
    },
    {
        path:'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
        //component: RegisterComponent
    },
    {
        path:'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path:'saveActivity/:date',
        canActivate: [AuthGuard],
        loadComponent: () => import('./pages/save-activity/save-activity.component').then(m => m.SaveActivityComponent)
        
        //component: SaveActivityComponent
    },


];
