import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe, NgForOf, NgIf } from '@angular/common';
import {VocabularyRoutingModule} from "./vocabulary-routing.module";
import {MatButton, MatButtonModule} from "@angular/material/button";
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTermDialogComponent } from './dialogs/add-term-dialog/add-term-dialog.component';
import {VocabularyListComponent} from "../user-vocabulary-list/vocabulary-list.component";



@NgModule({
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
        VocabularyListComponent
    ]
})
export class VocabularyModule { }
