import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../controler/service/client.service";
import {Client} from "../../../controler/model/client";

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit{
  constructor(private clientService: ClientService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.clientService.findAll().subscribe(data =>  this.clients = data );
  }

  public deleteByCode(client: Client, index: number): void{
    console.log('le code ' + client.code);
    this.client = client;
    this.clientService.deleteByCode(client.code).subscribe(data =>  {
      if(data>0){
        this.clients.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
  }

  get client(): Client {

    return this.clientService.client;
  }

  set client(value: Client) {
    this.clientService.client = value;
  }

  get clients(): Array<Client> {

    return this.clientService.clients;
  }

  set clients(value: Array<Client>) {
    this.clientService.clients = value;
  }

}
