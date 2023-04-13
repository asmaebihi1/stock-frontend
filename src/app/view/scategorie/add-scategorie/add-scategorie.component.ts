import {Component, OnInit} from '@angular/core';
import {ScategorieService} from "../../../controler/service/scategorie.service";
import {Scategorie} from "../../../controler/model/scategorie";

@Component({
  selector: 'app-add-scategorie',
  templateUrl: './add-scategorie.component.html',
  styleUrls: ['./add-scategorie.component.css']
})
export class AddScategorieComponent implements OnInit{
  constructor(private scategorieService: ScategorieService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.scategorieService.save().subscribe(data => {
      if (data != null) {
        this.scategories.push({...this.scategorie});

        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
  }

  get scategorie(): Scategorie {

    return this.scategorieService.scategorie;
  }

  set scategorie(value: Scategorie) {
    this.scategorieService.scategorie = value;
  }

  get scategories(): Array<Scategorie> {

    return this.scategorieService.scategories;
  }

  set scategories(value: Array<Scategorie>) {
    this.scategorieService.scategories = value;
  }

}
