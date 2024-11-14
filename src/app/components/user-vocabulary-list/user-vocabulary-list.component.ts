import { Component } from '@angular/core';
import {UserVocabularyCardComponent} from "./user-vocabulary-card/user-vocabulary-card.component";
import {Vocabulary} from "../../entities/vocabulary";
import {MatFabButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-user-vocabulary-list',
  standalone: true,
  imports: [
    UserVocabularyCardComponent,
    MatFabButton,
    MatIconModule
  ],
  templateUrl: './user-vocabulary-list.component.html',
  styleUrl: './user-vocabulary-list.component.less'
})
export class UserVocabularyListComponent {

  testVocabulary: Vocabulary = {
    _id: '1',
    name: 'test',
    description: 'description',
    terms: []
  }
}
