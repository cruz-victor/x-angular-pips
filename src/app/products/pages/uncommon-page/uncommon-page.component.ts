import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18n select
  public name: string = 'Victor';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Grace';
    this.gender = 'female';
  }

  //i18n plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }
}
