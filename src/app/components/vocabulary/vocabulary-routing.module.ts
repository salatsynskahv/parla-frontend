import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VocabularyComponent} from "./vocabulary/vocabulary.component";
import {UserVocabularyComponent} from "../user-vocabulary-list/user-vocabulary/user-vocabulary.component";


const routes: Routes = [
  {
    path: "",
    component: VocabularyComponent
  }, {
    path: ":id",
    component: UserVocabularyComponent
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

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class VocabularyRoutingModule {

}
