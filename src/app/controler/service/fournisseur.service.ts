import { Injectable } from '@angular/core';
import {Fournisseur} from "../model/fournisseur";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private _fournisseur! : Fournisseur;
  private _fournisseurs!: Array<Fournisseur>;
  private url = 'http://localhost:8080/api/' + 'four/';
  public save() : Observable<Fournisseur>{
    return this.http.post<Fournisseur>(this.url, this.fournisseur);
  }
  public deleteByLibelle(code: number) : Observable<number>{
    console.log('url==>' + this.url + 'libelle/' + this.fournisseur.libelle);
    return this.http.delete<number>(this.url +'libelle/' + this.fournisseur.libelle);
  }

  public findAll() : Observable<Array<Fournisseur>>{
    return this.http.get<Array<Fournisseur>>(this.url);
  }
  constructor(private http:HttpClient) { }


  get fournisseur(): Fournisseur {
    if(this._fournisseur == null){
      this._fournisseur= new Fournisseur();
    }
    return this._fournisseur;
  }

  set fournisseur(value: Fournisseur) {
    this._fournisseur = value;
  }

  get fournisseurs(): Array<Fournisseur> {
    if(this._fournisseurs == null){
      this._fournisseurs= new Array<Fournisseur>();
    }
    return this._fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this._fournisseurs= value;
  }
}
