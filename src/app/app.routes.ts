import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {Login} from "./components/login/login.component";
import {UserVocabularyListComponent} from "./components/user-vocabulary-list/user-vocabulary-list.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "vocabulary",
    loadChildren: () => import('./components/user-vocabulary-list/vocabulary.routes').then(c => c.routes)
  },
  // {
  //   path: "vocabulary",
  //   loadComponent: () => import('./components/user-vocabulary-list/user-vocabulary-list.component').then(c => c.UserVocabularyListComponent)
  // },
  {
    path: "login",
    component: Login
  }
];
