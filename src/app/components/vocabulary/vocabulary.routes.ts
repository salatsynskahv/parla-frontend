import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VocabularyComponent} from "./vocabulary/vocabulary.component";
import {VocabularyEntityComponent} from "./vocabulary-entity/vocabulary-entity.component";
import {UserVocabularyListComponent} from "../user-vocabulary-list/user-vocabulary-list.component";


export const routes: Routes = [
  {
    path: "",
    component: UserVocabularyListComponent
  },
  {
    path: ":id",
    component: VocabularyEntityComponent
  }
  // {
  //   path: ":courseUrl",
  //   component: CourseComponent,
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuardChildren],
  //   canDeactivate: [DeactivateGuard],
  //   resolve: {
  //     course: courseResolver
  //   },
  //   children: [
  //     {
  //       path: "",
  //       component: LessonsListComponent,
  //       resolve:  {
  //         lessons: lessonResolver
  //       }
  //     },
  //     {
  //       path: "lessons/:lessonSeqNo",
  //       component: LessonDetailComponent,
  //       resolve: {
  //         lessonDetails: lessonDetailResolver
  //       }
  //     }
  //   ]
  // }
];
