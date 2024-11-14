import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/input';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Term } from '../../../../entities/vocabulary';
import { ParlaStore } from '../../../../state/store';
import { patchState } from '@ngrx/signals';

@Component({
  selector: 'add-term-dialog',
  templateUrl: './add-term-dialog.component.html',
  styleUrl: './add-term-dialog.component.less'
})
export class AddTermDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddTermDialogComponent>);
  public term = new FormControl('');
  public explanation = new FormControl('');

  readonly store = inject(ParlaStore);

  updateVocabulary() {
    const term: Term = {
      term: this.term.value || '',
      explanation: this.explanation.value || ''
    }
   // this.store.updateState(term);
    this.dialogRef.close();
  }

}
