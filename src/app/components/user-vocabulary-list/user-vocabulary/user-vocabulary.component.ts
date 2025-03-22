import {Component, effect, inject, Input, OnInit} from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {Vocabulary} from "../../../entities/vocabulary";
import {ParlaStore} from "../../../state/store";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-vocabulary',
  standalone: true,
  imports: [
    MatList,
    MatListItem
  ],
  templateUrl: './user-vocabulary.component.html',
  styleUrl: './user-vocabulary.component.less'
})
export class UserVocabularyComponent implements OnInit{
  store = inject(ParlaStore);
  currentVocabulary: Vocabulary | undefined;
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const vocabularyId = this.route.snapshot.params['id'];
    console.log(vocabularyId);
    this.store.setCurrentVocabulary(vocabularyId);
  }


}
