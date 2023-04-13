import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../controler/service/client.service";

import {Client} from "../../../controler/model/client";
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit{
  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.clientService.save().subscribe(data => {
      if (data != null) {
        this.clients.push({...this.client});

        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
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
