import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiCharResponse } from '../interfaces/character';
import { URL_CHARACTERS, API_PUBLIC_KEY, BASE_URL_MARVEL } from '../shared/constants';
import { ApiComicResponse } from '../interfaces/comic';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }

  getCharacters(limit: number, name?:string): Observable<ApiCharResponse> {
    var params = new HttpParams().set("apikey", API_PUBLIC_KEY);    
    if(limit <= 100)
      params = params.set("limit", limit.toString());
    if(name)
      params = params.set("nameStartsWith",name);

    const options = { params: params };
      
    return this.http.get<ApiCharResponse>(URL_CHARACTERS, options);
  }

  getComicByChar(id: string):Observable<ApiComicResponse>{
    const options = {
      params: new HttpParams().set("apikey", API_PUBLIC_KEY)
    }
    return this.http.get<ApiComicResponse>(URL_CHARACTERS+"/"+id+"/comics", options); 
  }

  
}
