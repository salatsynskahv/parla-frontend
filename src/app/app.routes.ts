import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
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
    loadChildren: () => import('./components/vocabulary/vocabulary.routes').then(c => c.routes)
  },
  {
    path: "login",
    component: Login
  }
];
