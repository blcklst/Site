import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent {
  title = 'app';
  nume: string;
  numar: number;

  users = [
    { numar: 1, nume: 'Adrian' },
    { numar: 2, nume: 'Bogdan' },
    { numar: 3, nume: 'Cristian' },
    { numar: 4, nume: 'Adrian' },
    { numar: 5, nume: 'Bogdan' },
    { numar: 6, nume: 'Cristian' },
    { numar: 7, nume: 'Adrian' },
    { numar: 8, nume: 'Bogdan' },
    { numar: 9, nume: 'Cristian' },
    { numar: 1, nume: 'Adrian' },
    { numar: 2, nume: 'Bogdan' },
    { numar: 3, nume: 'Cristian' },
    { numar: 4, nume: 'Adrian' },
    { numar: 5, nume: 'Bogdan' },
    { numar: 6, nume: 'Cristian' },
    { numar: 7, nume: 'Adrian' },
    { numar: 8, nume: 'Bogdan' },
    { numar: 9, nume: 'Cristian' }
  ]

  public onClick(user: any) {
    this.nume = user.nume;
    this.numar = user.numar;
  }










}


