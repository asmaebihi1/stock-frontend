import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../model/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _client! : Client;
  private _clients!: Array<Client>;
  private url = 'http://localhost:8080/api/' + 'clients/';
  public save() : Observable<Client>{
    return this.http.post<Client>(this.url, this.client);
  }
  public deleteByCode(code: string) : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.client.code);
    return this.http.delete<number>(this.url +'code/' + this.client.code);
  }

  public findAll() : Observable<Array<Client>>{
    return this.http.get<Array<Client>>(this.url);
  }
  constructor(private http:HttpClient) { }


  get client(): Client {
    if(this._client == null){
      this._client= new Client();
    }
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get clients(): Array<Client> {
    if(this._clients == null){
      this._clients= new Array<Client>();
    }
    return this._clients;
  }

  set clients(value: Array<Client>) {
    this._clients = value;
  }

}
