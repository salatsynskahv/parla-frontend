import {inject, Injectable} from '@angular/core';
import {HttpWrapperService} from "./http-wrapper.service";
import {lastValueFrom, map} from "rxjs";
import {Term, Vocabulary} from "../entities/vocabulary";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {


  httpService = inject(HttpWrapperService);

  constructor() { }


  getVocabulary(): Promise<Vocabulary[]> {
    return lastValueFrom(this.httpService.post<any>('/mogobdApi/endpoint/data/v1/action/find', {
      dataSource: 'Cluster1',
      database: 'Parla',
      collection: 'Vocabularies',
      filter: {}
    }).pipe(
      map(result => result.documents),
    ));
  }

  createVocabulary(document: { name: string, description: string }) {
    return this.httpService.post<any>('/mogobdApi/endpoint/data/v1/action/insertOne', {
      dataSource: 'Cluster1',
      database: 'Parla',
      collection: 'Vocabularies',
      document: document
    }).pipe(
      map(result => result.documents)
    );
  }

  deleteVocabulary(id: string) {
    return this.httpService.post<any>('/mogobdApi/endpoint/data/v1/action/deleteOne', {
      dataSource: 'Cluster1',
      database: 'Parla',
      collection: 'Vocabularies',
      filter: {
        _id: {$oid: id}
      }
    })
  }

  getVocabularyTerms(id: string): Promise<Term[]> {
    return lastValueFrom(this.httpService.post<any>('/mogobdApi/endpoint/data/v1/action/find', {
      dataSource: 'Cluster1',
      database: 'Parla',
      collection: 'Terms',
      filter: {}
    }).pipe(
      map(result => result.documents),
    ));
  }
}
