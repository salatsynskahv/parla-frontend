import {Component, computed, inject, OnInit, resource, signal} from '@angular/core';
import {UserVocabularyCardComponent} from "./user-vocabulary-card/user-vocabulary-card.component";
import {Vocabulary} from "../../entities/vocabulary";
import {MatFabButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {CreateVocabularyListComponent} from "./create-vocabulary-list/create-vocabulary-list.component";
import {VocabularyService} from "../../services/vocabulary.service";
import {JsonPipe, NgForOf} from "@angular/common";
import {ParlaStore} from "../../state/store";

@Component({
  selector: 'app-user-vocabulary-list',
  standalone: true,
  imports: [
    UserVocabularyCardComponent,
    MatFabButton,
    MatIconModule
  ],
  templateUrl: './user-vocabulary-list.component.html',
  styleUrl: './user-user-vocabulary-list.component.less'
})
export class UserVocabularyListComponent implements OnInit {

  readonly dialog = inject(MatDialog);
  vocabularyService = inject(VocabularyService);
  vocabularyList = resource({
    loader: ({request}) => this.vocabularyService.getVocabulary()
  })
  vocabularyListValues = computed(() => this.vocabularyList.value());
  store = inject(ParlaStore);

  fakeList: Vocabulary[] = [
    {
      name: 'value',
      _id: 'id',
      terms: []
    }
  ]

  testVocabulary = signal<{
    _id: string,
    name: string,
    description: string,
    terms: []
  }[]>([]);

  handleCreateList(): void {
    const dialogRef = this.dialog.open(CreateVocabularyListComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.vocabularyList.reload();
    });
  }

  handleDeleteVocabulary(id: string): void {
    this.vocabularyService.deleteVocabulary(id).subscribe(
      () => {
        this.vocabularyList.reload();
      }
    );

  }

  //todo Fix - leave only one
  ngOnInit(): void {
    this.vocabularyList.reload();
    this.store.loadAll();
  }
}
