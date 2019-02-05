import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },
    {path: 'protected',component:ProtegidaComponent},
    { path: '**', pathMatch:'full' ,component: HomeComponent }
];

export const app_routing = RouterModule.forRoot(routes)
