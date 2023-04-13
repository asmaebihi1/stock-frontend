import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {AddArticleComponent} from "./view/article/add-article/add-article.component";
import {ListArticleComponent} from "./view/article/list-article/list-article.component";
import {AddCategorieComponent} from "./view/categorie/add-categorie/add-categorie.component";
import {ListCategorieComponent} from "./view/categorie/list-categorie/list-categorie.component";
import {AddClientComponent} from "./view/client/add-client/add-client.component";
import {ListClientComponent} from "./view/client/list-client/list-client.component";
import {AddFourComponent} from "./view/fournisseur/add-four/add-four.component";
import {ListFourComponent} from "./view/fournisseur/list-four/list-four.component";
import {AddScategorieComponent} from "./view/scategorie/add-scategorie/add-scategorie.component";
import {ListScategorieComponent} from "./view/scategorie/list-scategorie/list-scategorie.component";
export let indexLink = '';
const routes: Routes = [
  {path: indexLink, component:HomeComponent},
  {path: 'add-article', component:AddArticleComponent},
  {path: 'list-article', component:ListArticleComponent} ,
  {path: 'add-categorie', component:AddCategorieComponent},
  {path: 'list-categorie', component:ListCategorieComponent},
  {path: 'add-client', component:AddClientComponent},
  {path: 'list-client', component:ListClientComponent},
  {path: 'add-four', component:AddFourComponent},
  {path: 'list-four', component:ListFourComponent},
  {path: 'add-scategorie', component:AddScategorieComponent},
  {path: 'list-scategorie', component:ListScategorieComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
