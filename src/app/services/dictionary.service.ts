import {Injectable, inject, effect} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable, map, of, tap} from 'rxjs';
import {Term} from '../entities/vocabulary';
import {resultMemoize} from "@ngrx/store";



@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  MERRIAM_WEBSTER_KEY = 'fa3ddf1c-ff98-432a-b104-5395d6dc3aad'

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getDictionary(): Observable<Term[]> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('api-key', "YCTdRepCZQzGYFisNyXcopwZdFPUZ0vgDbxUXiTTVUmtLYnGlyg67BPDWC4z8F2n");
//       .set('Authorization', `Bearer ${this.authService.getAccessToken()}`);

    return this.http.post<any>('/mogobdApi/endpoint/data/v1/action/find', {
      dataSource: 'Cluster1',
      database: 'Parla',
      collection: 'Dictionary',
      filter: {}
    }, {
      headers: headers
    }).pipe(
      map(result => result.documents)
    );
  }

  updateVocabulary(term: Term): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('api-key', "YCTdRepCZQzGYFisNyXcopwZdFPUZ0vgDbxUXiTTVUmtLYnGlyg67BPDWC4z8F2n");

    return this.http.post<any>('/mogobdApi/endpoint/data/v1/action/insertOne', {
      dataSource: 'Cluster1',
      database: 'Parla',
      collection: 'Dictionary',
      document: term
    }, {
      headers: headers
    });
  }

  getMerriamWebsterTranslations(term : string) {
    return this.http.get(`https://www.dictionaryapi.com/api/v3/references/learners/json/${term}?key=${this.MERRIAM_WEBSTER_KEY}`);
  }

  getTranslations(text: string) {
    const headers = new HttpHeaders()
      .set("x-rapidapi-key", "84b86b62e7mshdfa9227a18d891dp129f2cjsn0dd37220b729")
      .set('x-rapidapi-host', 'wordsapiv1.p.rapidapi.com')
      .set("Accept", "application/json");

    return this.http.get(`https://wordsapiv1.p.rapidapi.com/words/${text}`, {
      headers: headers
    }).pipe(
      tap(
        result => console.log(result)
      )
    );
  }

  getSimpleTranslate(text: string) {
    //https://simple-translate2.p.rapidapi.com/translate?source_lang=auto&target_lang=ja
  }
}
