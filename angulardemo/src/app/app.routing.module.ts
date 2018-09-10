import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';
import { ServerinteractionComponent } from './serverinteraction/serverinteraction.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { UsersComponent } from './user/users/users.component';
const routes: Routes = [
    {
        path:'',
        // redirectTo:'/login',
        // pathMatch: 'full'
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
      
    },{
        path:'home',
        component: HomeComponent
    },{
        path:'server',
        component:ServerComponent
    },
    {
        path:'user',
        component: UserComponent
    },
    {
        path:'users/:id',
        component: UsersComponent
    },{
        path:'serverInteraction',
        component: ServerinteractionComponent
    },{
        path:'**',
        component:PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}