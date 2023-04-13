import { Injectable } from '@angular/core';
import {Article} from "../model/article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private _article! : Article;
  private _articles!: Array<Article>;

  private url = 'http://localhost:8080/api/' + 'articles/';

  public save() : Observable<Article>{
    return this.http.post<Article>(this.url, this.article);
  }
  public deleteByCode(code: string) : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.article.code);
    return this.http.delete<number>(this.url +'code/' + this.article.code);
  }

  public findAll() : Observable<Array<Article>>{
    return this.http.get<Array<Article>>(this.url);
  }
  constructor(private http:HttpClient) { }

  get article(): Article {
    if(this._article == null){
      this._article= new Article();
    }
    return this._article;
  }

  set article(value: Article) {
    this._article = value;
  }

  get articles(): Array<Article> {
    if(this._articles == null){
      this._articles= new Array<Article>();
    }
    return this._articles;
  }

  set articles(value: Array<Article>) {
    this._articles = value;
  }
}
