import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {SearchComponent} from "../search/search.component";
import {MatDialog} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'pa-header',
  standalone: true,
    imports: [
        RouterLink,
        MatButton,
        MatIcon
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {

  readonly dialog = inject(MatDialog);
  word = new FormControl('');


  openSearchDialog() {
    const position = {left: '2%', top: '10%'};
    const dialogRef = this.dialog.open(SearchComponent, {width: '80%', height:'60%', position, data: {searchText: this.word.value}});
    dialogRef.afterClosed().subscribe(result => {
      this.word.setValue(result);
    })
  }

}
