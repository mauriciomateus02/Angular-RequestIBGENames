import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';
import { UrlApi } from './url.server';

@Injectable({
  providedIn: 'root'
})
export class ListServicesNamesService {

  constructor(private http: HttpClient) { }

 getAll(name:string): Observable<ResponsePageable[]>{
    const uri = String(UrlApi)+name;
    return this.http.get<ResponsePageable[]>(uri)
  }
}
