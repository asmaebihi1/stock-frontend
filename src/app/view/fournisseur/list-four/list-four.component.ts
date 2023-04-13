import {Component, OnInit} from '@angular/core';
import {FournisseurService} from "../../../controler/service/fournisseur.service";
import {Fournisseur} from "../../../controler/model/fournisseur";

@Component({
  selector: 'app-list-four',
  templateUrl: './list-four.component.html',
  styleUrls: ['./list-four.component.css']
})
export class ListFourComponent implements OnInit{
  constructor(private fournisseurService: FournisseurService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.fournisseurService.findAll().subscribe(data =>  this.fournisseurs = data );
  }

  public deleteByCode(fournisseur: Fournisseur, index: number): void{
    console.log('le id ' + fournisseur.id);
    this.fournisseur = fournisseur;
    this.fournisseurService.deleteByLibelle(fournisseur.id).subscribe(data =>  {
      if(data>0){
        this.fournisseurs.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
  }

  get fournisseur(): Fournisseur {

    return this.fournisseurService.fournisseur;
  }

  set fournisseur(value: Fournisseur) {
    this.fournisseurService.fournisseur = value;
  }

  get fournisseurs(): Array<Fournisseur> {

    return this.fournisseurService.fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this.fournisseurService.fournisseurs = value;
  }

}
