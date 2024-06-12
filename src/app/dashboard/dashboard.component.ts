import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenubarModule, ButtonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(
    private router: Router,
    private http: HttpClient,
    private _stateSrv: StateService
  ) {}
  public item: any[] | undefined;
  public status: any = 'HI';

  About(): void {
    this.router.navigate(['/about']);
  }

  contact(): void {
    this.router.navigate(['/contact']);
  }

  service(): void {
    this.router.navigate(['/service']);
  }

  initial(): void {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this._stateSrv.statusSubject.subscribe((res) => {
      this.list().subscribe((ele) => {
        const encryptedData = ele.encrypted;
        console.log(encryptedData)
        this.decrypt({
          key: 'robotic.js',
          data: encryptedData,
        }).subscribe((ele) => {
          this.status = ele.data[0].status;
          console.log(this.status)
          this.item = [
            {
              label: 'Home',
              icon: 'pi pi-home',
              command: () => {
                this.initial();
              },
            },
            {
              label: 'Project',
              icon: 'pi pi-briefcase',
              command: () => {
                this.service();
              },
            },
            {
              label: 'About',
              icon: 'pi pi-user',
              command: () => {
                this.About();
              },
            },
            {
              label: 'Contact',
              icon: 'pi pi-envelope',
              command: () => {
                this.contact();
              },
            },
            {
              label: ele.data[0].status,
              icon: 'pi pi-envelope',
            },
          ];
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
