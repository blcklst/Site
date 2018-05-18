import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  title = 'app';
  nume: string;
  numar: number;

  users = [
    { numar: 1, nume: 'Adrian' },
    { numar: 2, nume: 'Bogdan' },
    { numar: 3, nume: 'Cristian' },
    { numar: 4, nume: 'Adrian' },
    { numar: 5, nume: 'Bogdan' },
    { numar: 6, nume: 'Cristian' }
  ];

  public onClick(user: any) {
    this.nume = user.nume;
    this.numar = user.numar;
  }










}


