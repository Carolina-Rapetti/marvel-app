import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';
import { URL_CHARACTERS, API_PUBLIC_KEY } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }

  getCharacters(limit: number): Observable<ApiResponse> {
    const options = limit <= 100?
      { params: new HttpParams().set("apikey", API_PUBLIC_KEY).set('limit', limit.toString()) } : 
      { params: new HttpParams().set("apikey", API_PUBLIC_KEY)};
    return this.http.get<ApiResponse>(URL_CHARACTERS, options);
  }
  /* getCharactersByName(name: string): Observable<ApiResponse>{

  } */

  
}
