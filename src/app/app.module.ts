// noinspection AngularInvalidImportedOrDeclaredSymbol

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddClientComponent } from './view/client/add-client/add-client.component';
import { ListClientComponent } from './view/client/list-client/list-client.component';
import { AddCategorieComponent } from './view/categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './view/categorie/list-categorie/list-categorie.component';
import { AddScategorieComponent } from './view/scategorie/add-scategorie/add-scategorie.component';
import { ListScategorieComponent } from './view/scategorie/list-scategorie/list-scategorie.component';
import { AddArticleComponent } from './view/article/add-article/add-article.component';
import { ListArticleComponent } from './view/article/list-article/list-article.component';
import { AddFourComponent } from './view/fournisseur/add-four/add-four.component';
import { ListFourComponent } from './view/fournisseur/list-four/list-four.component';
import { FormsModule  } from '@angular/forms';

import {NavbarComponent} from "./navbar/navbar.component";

import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './view/home/home.component';
import {HttpClientModule} from "@angular/common/http";
@NgModule({

  declarations: [
    AppComponent,
    AddClientComponent,

    ListClientComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    AddScategorieComponent,
    ListScategorieComponent,
    AddArticleComponent,
    ListArticleComponent,
    AddFourComponent,
    ListFourComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap :[AppComponent]

})
export class AppModule { }
