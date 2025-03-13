import {Component, inject, Inject} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {VocabularyService} from "../../../services/vocabulary.service";

class FormDialogComponent {
}

@Component({
  selector: 'app-create-vocabulary-list',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, MatButton, ReactiveFormsModule],
  templateUrl: './create-vocabulary-list.component.html',
  styleUrl: './create-vocabulary-list.component.less'
})
export class CreateVocabularyListComponent {
  vocabularyService = inject(VocabularyService);
  form;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateVocabularyListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  onSave(): void {
    this.vocabularyService.createVocabulary(this.form.value as {name: string, description: string})
      .subscribe(text => {
        console.log(text)
      });
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
