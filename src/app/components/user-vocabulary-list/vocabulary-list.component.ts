import {Component, effect, inject, OnInit, signal} from '@angular/core';
import {VocabularyCardComponent} from "./vocabulary-card/vocabulary-card.component";
import {Vocabulary} from "../../entities/vocabulary";
import {MatFabButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ParlaStore} from "../../state/store";

@Component({
  selector: 'app-user-vocabulary-list',
  standalone: true,
  imports: [
    VocabularyCardComponent,
    MatFabButton,
    MatIconModule
  ],
  templateUrl: './vocabulary-list.component.html',
  styleUrl: './vocabulary-list.component.less'
})
  export class VocabularyListComponent {

  public store = inject(ParlaStore);
  vocabularyList : Vocabulary[] | undefined;

  constructor() {
    effect(() => {
      this.vocabularyList = this.store.vocabularies();
    });
  }
}
