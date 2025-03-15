import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Vocabulary} from "../../../entities/vocabulary";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {MatCard, MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-user-vocabulary-card',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    MatCardModule
  ],
  templateUrl: './user-vocabulary-card.component.html',
  styleUrl: './user-vocabulary-card.component.less'
})
export class UserVocabularyCardComponent {

  @Input() vocabulary!: Vocabulary;
  @Output() onDeleteClick: EventEmitter<string> = new EventEmitter();
  router = inject(Router);

  onDeleteClickHandler($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.onDeleteClick.emit(this.vocabulary._id);
  }

  onCardClick() {
    this.router.navigate(['/vocabulary/'+ this.vocabulary._id]);
  }
}
