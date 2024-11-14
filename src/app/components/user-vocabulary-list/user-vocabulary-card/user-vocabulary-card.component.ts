import {Component, Input} from '@angular/core';
import {Vocabulary} from "../../../entities/vocabulary";

@Component({
  selector: 'app-user-vocabulary-card',
  standalone: true,
  imports: [],
  templateUrl: './user-vocabulary-card.component.html',
  styleUrl: './user-vocabulary-card.component.less'
})
export class UserVocabularyCardComponent {

  @Input() vocabulary!: Vocabulary;

}
