import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpWrapperService {
  private readonly headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('api-key', "YCTdRepCZQzGYFisNyXcopwZdFPUZ0vgDbxUXiTTVUmtLYnGlyg67BPDWC4z8F2n");

  constructor(private http: HttpClient) {}

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, { headers: this.headers, params });
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body, { headers: this.headers });
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body, { headers: this.headers });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url, { headers: this.headers });
  }
}
