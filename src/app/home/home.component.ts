import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StateService } from '../service/state.service';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public status: any = '';
  public personalInfo: { name: string; email: string; contact: string } = {
    name: 'Kunal Eknath Bhande',
    email: 'bhandekunal16@gmail.com',
    contact: '8779143048',
  };

  public information: Array<{ name: string; from: string; to: string }> = [
    {
      name: 'Software Developer at Network People Service Technology',
      from: 'from : 3 Nov 2022',
      to: 'to : present',
    },
  ];
  constructor(
    private router: Router,
    private http: HttpClient,
    private _stateSrv: StateService
  ) {}

  About(): void {
    this.router.navigate(['/about']);
  }

  ngOnInit() {
    this._stateSrv.statusSubject.subscribe((res) => {
      this.list().subscribe((ele) => {
        const encryptedData = ele.encrypted;
        this.decrypt({
          key: 'robotic.js',
          data: encryptedData,
        }).subscribe((ele) => {
          this.status = ele.data[0].status;
        });
      });
    });
  }

  list(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .get<any>(`https://device-probe.vercel.app/get/portfolio/status`, {
        headers,
      })
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  decrypt(body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<any>('https://device-probe.vercel.app/decrypt', body, {
        headers,
      })
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
