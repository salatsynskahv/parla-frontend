import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {Login} from "./components/login/login.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "vocabulary",
    loadComponent: () => import('./components/vocabulary/vocabulary/vocabulary.component').then(m => m.VocabularyComponent)
  },
  {
    path: "login",
    component: Login
  }
];
