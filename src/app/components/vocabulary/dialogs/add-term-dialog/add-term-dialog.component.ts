import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {  } from '@angular/material/input';
import {
  FormControl,
} from '@angular/forms';
import { Term } from '../../../../entities/vocabulary';
import { ParlaStore } from '../../../../state/store';

@Component({
  selector: 'add-term-dialog',
  templateUrl: './add-term-dialog.component.html',
  standalone: true,
  styleUrl: './add-term-dialog.component.less'
})
export class AddTermDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddTermDialogComponent>);
  public term = new FormControl('');
  public explanation = new FormControl('');

  readonly store = inject(ParlaStore);

  updateVocabulary() {
    // const term: Term = {
    //   term: this.term.value || '',
    //   explanation: this.explanation.value || ''
    // }
   // this.store.updateState(term);
    this.dialogRef.close();
  }

}
