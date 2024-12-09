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
    loadChildren: () => import('./components/vocabulary/vocabulary.module').then(m => m.VocabularyModule)
  },
  {
    path: "login",
    component: Login
  }
];
