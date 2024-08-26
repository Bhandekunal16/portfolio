import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { StateService } from '../service/state.service';
import { Message } from 'primeng/api';
import { SharedModule } from '../shared/shared.module';
import { SharedService } from '../shared.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
})
export class StatusComponent implements OnInit {
  public myForm: FormGroup;
  public msg: Message[] | any;
  public options: string[] | any = ['AT HOME', 'AT OFFICE', 'AT TRAVEL'];
  public RoboticDB1: string | undefined;
  public RoboticDB2: string | undefined;
  private readonly secretKey = 'robotic';

  constructor(
    private http: HttpClient,
    private _stateSrv: StateService,
    private shared: SharedService
  ) {
    this.myForm = new FormGroup({
      userType: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.list().subscribe((ele) => {
      const encryptedData = ele.encrypted;
      this.decrypt({
        key: 'robotic.js',
        data: encryptedData,
      }).subscribe((ele) => {
        this.RoboticDB1 = ele.data.length > 0 ? 'working ' : 'not working';
      });
    });

    this.list2().subscribe((ele) => {
      const data = this.localDecrypt(ele.response);
      this.RoboticDB2 = data.status > 0 ? 'working ' : 'not working';
    });
  }

  public submitForm(): void {
    localStorage.setItem('status', this.myForm.value.userType);
    this.register({ status: this.myForm.value.userType }).subscribe((ele) => {
      this._stateSrv.statusSubject.next(ele);
    });
  }

  private register(body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<any>('https://device-probe.vercel.app/edit/portfolio', body, {
        headers,
      })
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  private list(): Observable<any> {
    const headers = this.shared.header();
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

  private list2(): Observable<any> {
    const headers = this.shared.header();
    return this.http
      .post<any>(
        `https://smart-shop-api-eta.vercel.app/product/customer/get`,
        {
          skip: 0,
          limit: 10,
        },
        {
          headers,
        }
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  private decrypt(body: any): Observable<any> {
    const headers = this.shared.header();
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

  private localDecrypt(encryptedData: string): any {
    const decryptedData = CryptoJS.AES.decrypt(
      encryptedData,
      this.secretKey
    ).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
  }
}
