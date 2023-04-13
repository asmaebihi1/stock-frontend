import {Component, OnInit} from '@angular/core';
import {Scategorie} from "../../../controler/model/scategorie";
import {ScategorieService} from "../../../controler/service/scategorie.service";

@Component({
  selector: 'app-list-scategorie',
  templateUrl: './list-scategorie.component.html',
  styleUrls: ['./list-scategorie.component.css']
})
export class ListScategorieComponent implements OnInit{
  constructor(private scategorieService: ScategorieService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.scategorieService.findAll().subscribe(data =>  this.scategories = data );
  }

  public deleteByCode(scategorie: Scategorie, index: number): void{
    console.log('le code ' + scategorie.code);
    this.scategorie = scategorie;
    this.scategorieService.deleteByCode(scategorie.code).subscribe(data =>  {
      if(data>0){
        this.scategories.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
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
