import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JoinComponent} from './pages/join/join.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
const routes: Routes =[

    {path : 'home', component: HomeComponent},
    {path : 'about', component: AboutComponent},
    {path : 'contact', component: ContactComponent},
    {path : 'join', component: JoinComponent},
    {path : '**',pathMatch: 'full', redirectTo: 'home' }

]

@NgModule({
    
imports: [RouterModule.forRoot(routes, {useHash:true})],
exports: [RouterModule]
})

export class AppRoutingModule { }