import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shelter } from './app/shelter';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class ShelterService {
 
  private shelterURL: string;

  private idURL: string; 
 
  constructor(private http: HttpClient) {
    this.shelterURL = 'http://localhost:4235/shelters';

    this.idURL = 'http://localhost:4235/shelters/:id'
  }
 
  public findAll(): Observable<Shelter[]> {
    return this.http.get<Shelter[]>(this.shelterURL);
  }
 
  public findById(id: number): Observable<Shelter> {
    return this.http.get<Shelter>(this.idURL);
  }
}
