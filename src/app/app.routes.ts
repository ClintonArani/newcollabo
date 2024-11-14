import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

export const routes: Routes = [
    {path: 'home',component: HomeComponent},
    {path: '',redirectTo: 'home',pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register',component: RegisterComponent},
    {path: '**',component: NotfoundComponent}
];
