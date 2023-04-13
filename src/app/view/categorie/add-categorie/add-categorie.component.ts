import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../../../controler/service/categorie.service";
import {Categorie} from "../../../controler/model/categorie";

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit{
  constructor(private categorieService: CategorieService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.categorieService.save().subscribe(data => {
      if (data != null) {
        this.categories.push({...this.categorie});

        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
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
