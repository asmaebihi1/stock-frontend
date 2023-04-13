import {Component, OnInit} from '@angular/core';
import {FournisseurService} from "../../../controler/service/fournisseur.service";
import {Fournisseur} from "../../../controler/model/fournisseur";

@Component({
  selector: 'app-add-four',
  templateUrl: './add-four.component.html',
  styleUrls: ['./add-four.component.css']
})
export class AddFourComponent implements OnInit{

  constructor(private fournisseurService: FournisseurService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.fournisseurService.save().subscribe(data => {
      if (data != null) {
        this.fournisseurs.push({...this.fournisseur});

        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
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
