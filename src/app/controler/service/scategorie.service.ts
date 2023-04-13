import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Scategorie} from "../model/scategorie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ScategorieService {

  private _scategorie! : Scategorie;
  private _scategories!: Array<Scategorie>;
  private url = 'http://localhost:8080/api/' + 'scategories/';
  public save() : Observable<Scategorie>{
    return this.http.post<Scategorie>(this.url, this.scategorie);
  }
  public deleteByCode(code: string) : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.scategorie.code);
    return this.http.delete<number>(this.url +'code/' + this.scategorie.code);
  }

  public findAll() : Observable<Array<Scategorie>>{
    return this.http.get<Array<Scategorie>>(this.url);
  }
  constructor(private http:HttpClient) { }


  get scategorie(): Scategorie {
    if(this._scategorie == null){
      this._scategorie= new Scategorie();
    }
    return this._scategorie;
  }

  set scategorie(value: Scategorie) {
    this._scategorie = value;
  }

  get scategories(): Array<Scategorie> {
    if(this._scategories == null){
      this._scategories= new Array<Scategorie>();
    }
    return this._scategories;
  }

  set scategories(value: Array<Scategorie>) {
    this._scategories = value;
  }

}
