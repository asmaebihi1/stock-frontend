import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../../controler/service/article.service";
import {Article} from "../../../controler/model/article";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit{


  constructor(private articleService: ArticleService) {
  }


  ngOnInit(): void {
  }

  public save(): void {
    this.articleService.save().subscribe(data => {
      if (data != null) {
        this.articles.push({...this.article});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
  }



  get article(): Article {

    return this.articleService.article;
  }

  set article(value: Article) {
    this.articleService.article= value;
  }

  get articles(): Array<Article> {

    return this.articleService.articles;
  }

  set articles(value: Array<Article>) {
    this.articleService.articles = value;
  }

}
