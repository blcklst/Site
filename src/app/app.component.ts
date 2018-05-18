import { Component } from '@angular/core';
import { User } from './types/user.types';
import { AppService } from './app.service';
import { Employee } from './employee.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nume: string;
  numar: number;
  idAngajat: number;
  angajat: Employee = {

    firstName: null,
    lastName:  null,
    salary: null,
    gender: null


  };


  constructor(
    private test: AppService
  ) {}

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
  ];

  public onClick(user: any) {
    this.nume = user.nume;
    this.numar = user.numar;
  }

  public testService () {
    this.test.employeeGet(this.idAngajat).subscribe(
      result => {
        console.log(result);
        this.nume = result;
      },
      err => {
        console.log(err);
        this.nume = err;
      }
    );
  }

  public addEmployee () {
    console.log(this.angajat);
    this.test.employeesPost(this.angajat).subscribe(
      result => {
        console.log(result);
      },
      err => {
        console.log(err);
      }
    );
  }










}


