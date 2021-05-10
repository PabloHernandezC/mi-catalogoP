import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Automovil } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private autosURL = 'https://catalogo-autos-nodejs.herokuapp.com/api/autos';
  private autosUpdateURL = 'https://catalogo-autos-nodejs.herokuapp.com/api/autos';

  constructor(private http: HttpClient) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosURL)
  }

  updateAuto(auto:Automovil): Observable<any>{
    return this.http.put(`${this.autosUpdateURL}/${auto._id}`, auto);
  }

  createAuto(auto:Automovil): Observable<any>{
    return this.http.post(this.autosURL, auto);
  }

  deleteAuto(auto:Automovil): Observable<any>{
    return this.http.delete(`${this.autosUpdateURL}/${auto._id}`);
  }
}
