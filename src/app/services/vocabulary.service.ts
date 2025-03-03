import {inject, Injectable} from '@angular/core';
import {HttpWrapperService} from "./http-wrapper.service";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {


  httpService = inject(HttpWrapperService);

  constructor() { }


  getVocabulary() {
    return this.httpService.post<any>('/mogobdApi/endpoint/data/v1/action/find', {
      dataSource: 'Cluster1',
      database: 'Parla',
      collection: 'Vocabularies',
      filter: {}
    }).pipe(
      map(result => result.documents)
    );
  }

  createVocabulary(document: {name: string, description: string}) {
    return this.httpService.post<any>('/mogobdApi/endpoint/data/v1/action/insertOne', {
      dataSource: 'Cluster1',
      database: 'Parla',
      collection: 'Vocabularies',
      document: document
    }).pipe(
      map(result => result.documents)
    );
  }
}
