import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../../controler/service/article.service";
import {Article} from "../../../controler/model/article";

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit{

  constructor(private articleService: ArticleService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.articleService.findAll().subscribe(data =>  this.articles = data );
  }

  public deleteByCode(article: Article, index: number): void{
    console.log('le code ' + article.code);
    this.article = article;
    this.articleService.deleteByCode(article.code).subscribe(data =>  {
      if(data>0){
        this.articles.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
  }

  get article(): Article {

    return this.articleService.article;
  }

  set article(value: Article) {
    this.articleService.article = value;
  }

  get articles(): Array<Article> {

    return this.articleService.articles;
  }

  set articles(value: Array<Article>) {
    this.articleService.articles = value;
  }

}
