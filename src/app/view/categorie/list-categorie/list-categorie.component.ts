import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../../../controler/service/categorie.service";
import {Categorie} from "../../../controler/model/categorie";

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit{
  constructor(private categorieService: CategorieService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.categorieService.findAll().subscribe(data =>  this.categories = data );
  }

  public deleteByCode(categorie: Categorie, index: number): void{
    console.log('le code ' + categorie.code);
    this.categorie = categorie;
    this.categorieService.deleteByCode(categorie.code).subscribe(data =>  {
      if(data>0){
        this.categories.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
  }

  get categorie(): Categorie {

    return this.categorieService.categorie;
  }

  set categorie(value: Categorie) {
    this.categorieService.categorie = value;
  }

  get categories(): Array<Categorie> {

    return this.categorieService.categories;
  }

  set categories(value: Array<Categorie>) {
    this.categorieService.categories = value;
  }


}
