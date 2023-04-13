import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Categorie} from "../model/categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private _categorie! : Categorie;
  private _categories!: Array<Categorie>;

  private url = 'http://localhost:8080/api/' + 'categories/';

  public save() : Observable<Categorie>{
    return this.http.post<Categorie>(this.url, this.categorie);
  }
  public deleteByCode(code: string) : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.categorie.code);
    return this.http.delete<number>(this.url +'code/' + this.categorie.code);
  }

  public findAll() : Observable<Array<Categorie>>{
    return this.http.get<Array<Categorie>>(this.url);
  }
  constructor(private http:HttpClient) { }

  get categorie(): Categorie {
    if(this._categorie == null){
      this._categorie= new Categorie();
    }
    return this._categorie;
  }

  set categorie(value: Categorie) {
    this._categorie = value;
  }

  get categories(): Array<Categorie> {
    if(this._categories == null){
      this._categories= new Array<Categorie>();
    }
    return this._categories;
  }

  set categories(value: Array<Categorie>) {
    this._categories = value;
  }
}
