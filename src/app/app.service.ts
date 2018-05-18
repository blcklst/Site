import { Injectable, OnInit, Optional, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, RequestOptionsArgs, Headers, ResponseContentType } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee.type';


@Injectable()
export class AppService {
  public messageResult: string;
  public getResult: string;
  isLoading: Boolean = false;
  public userGuid: string;
  public passwordChange: string;
  public credentials: any;

  constructor(
    public router: Router,
    // private urlReplaceService: UrlReplaceService
    private route: ActivatedRoute,
    private http: Http

  ) {}

  public autoSeries() {
    const newObs = new Observable<string>(observer => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      headers.append('Accept', 'application/json');

      const args: RequestOptionsArgs = {
        headers: headers
      };
      this.http.get('http://localhost:55000/api/employees', args).subscribe(
        result => {
          console.log(result);
          observer.next('au fost gasiti angajatii');
          observer.complete();
        },
        (err: Response) => {
          // console.log('eroare email = ' + err.json().content);
          console.log(err);
          // if (err.json().message === 'ERROR') {
          //   this.getResult = 'Exista deja un user inregistrat cu ' + userMail + '.';

          // }
          observer.error('nu au fost gasiti angajatii');
        }
      );
    });
    return newObs;
  }

  public employeeGet(id: number) {
    const newObs = new Observable<string>(observer => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      headers.append('Accept', 'application/json');

      const args: RequestOptionsArgs = {
        headers: headers
      };
      this.http.get('http://localhost:55000/api/employees/' + id, args).subscribe(
        result => {
          console.log(result);
          observer.next(JSON.stringify(result.json().firstName));
          observer.complete();
        },
        (err: Response) => {
          // console.log('eroare email = ' + err.json().content);
          console.log(err);
          // if (err.json().message === 'ERROR') {
          //   this.getResult = 'Exista deja un user inregistrat cu ' + userMail + '.';

          // }
          observer.error('nu a fost gasit angajatul');
        }
      );
    });
    return newObs;
  }

  public employeesPost(employee: Employee) {
    const newObs = new Observable<string>(observer => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      headers.append('Accept', 'application/json');

      const args: RequestOptionsArgs = {
        headers: headers
      };
      this.http.post('http://localhost:55000/api/employees', employee , args).subscribe(
        result => {
          console.log(result);
          observer.next('a fost adaugat angajatul');
          observer.complete();
        },
        (err: Response) => {
          // console.log('eroare email = ' + err.json().content);
          console.log(err);
          // if (err.json().message === 'ERROR') {
          //   this.getResult = 'Exista deja un user inregistrat cu ' + userMail + '.';

          // }
          observer.error('nu a fost adaugat angajatul');
        }
      );
    });
    return newObs;
  }

  public employeesPut() {
    const newObs = new Observable<string>(observer => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      headers.append('Accept', 'application/json');

      const args: RequestOptionsArgs = {
        headers: headers
      };
      this.http.put('http://localhost:55000/api/employees', args).subscribe(
        result => {
          console.log(result);
          observer.next('au fost gasiti angajatii');
          observer.complete();
        },
        (err: Response) => {
          // console.log('eroare email = ' + err.json().content);
          console.log(err);
          // if (err.json().message === 'ERROR') {
          //   this.getResult = 'Exista deja un user inregistrat cu ' + userMail + '.';

          // }
          observer.error('nu au fost gasiti angajatii');
        }
      );
    });
    return newObs;
  }

  public employeesDelete() {
    const newObs = new Observable<string>(observer => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      headers.append('Accept', 'application/json');

      const args: RequestOptionsArgs = {
        headers: headers
      };
      this.http.delete('http://localhost:55000/api/employees', args).subscribe(
        result => {
          console.log(result);
          observer.next('au fost gasiti angajatii');
          observer.complete();
        },
        (err: Response) => {
          // console.log('eroare email = ' + err.json().content);
          console.log(err);
          // if (err.json().message === 'ERROR') {
          //   this.getResult = 'Exista deja un user inregistrat cu ' + userMail + '.';

          // }
          observer.error('nu au fost gasiti angajatii');
        }
      );
    });
    return newObs;
  }
}
