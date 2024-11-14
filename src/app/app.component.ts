import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ParlaStore } from './state/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

  title = 'parla';

  readonly store = inject(ParlaStore);

  constructor(private httpClient: HttpClient, private authService: AuthService){}

  // ngOnInit(): void {
  //   const headers = new HttpHeaders().set("Content-Type", "application/json");
  //   this.httpClient.post<any>('https://eu-central-1.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-ycpnbfz/auth/providers/api-key/login', {
  //     "key": "YCTdRepCZQzGYFisNyXcopwZdFPUZ0vgDbxUXiTTVUmtLYnGlyg67BPDWC4z8F2n"
  //   },{
  //     headers: headers
  //   }).subscribe(
  //     {
  //       next: (result) => {
  //         console.log(result);
  //         this.authService.setAccessToken(result.access_token);
  //       }
  //     }
  //   );
  // }

  addTerm(text: string) {
    this.store.addTerm({term: 'Hi', explanation: 'Test'});
    console.log(this.store.vocabulary());
  }


}
