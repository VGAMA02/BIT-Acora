import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SaveActivityComponent } from './pages/save-activity/save-activity.component';
export const routes: Routes = [    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'calendar',
        component: CalendarComponent
    },
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'saveActivity/:date',
        component: SaveActivityComponent
    },


];
