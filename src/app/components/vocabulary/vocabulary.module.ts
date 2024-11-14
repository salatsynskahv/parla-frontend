import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe, NgForOf, NgIf } from '@angular/common';
import {VocabularyRoutingModule} from "./vocabulary-routing.module";
import {MatButton, MatButtonModule} from "@angular/material/button";
import { ParlaStore } from '../../state/store';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTermDialogComponent } from './dialogs/add-term-dialog/add-term-dialog.component';
import {UserVocabularyListComponent} from "../user-vocabulary-list/user-vocabulary-list.component";



@NgModule({
  declarations: [VocabularyComponent, AddTermDialogComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        VocabularyRoutingModule,
        ReactiveFormsModule,
        MatButton,
        MatLabel,
        MatInput,
        MatFormField,
        AsyncPipe,
        NgIf,
        NgForOf,
        JsonPipe,
        MatIconModule,
        ReactiveFormsModule,
        MatButton,
        UserVocabularyListComponent
    ]
})
export class VocabularyModule { }
