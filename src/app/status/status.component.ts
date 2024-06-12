import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MessagesModule,
    ButtonModule,
    HttpClientModule,
  ],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
})
export class StatusComponent {
  public myForm: FormGroup;
  public msg: Message[] | any;
  public options: string[] | any = ['AT HOME', 'AT OFFICE', 'AT TRAVEL'];

  constructor(private http: HttpClient) {
    this.myForm = new FormGroup({
      userType: new FormControl('', Validators.required),
    });
  }
  submitForm() {
    localStorage.setItem('status', this.myForm.value.userType);

    setInterval(() => {
      window.location.reload();
    }, 3000);
  }

  register(body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<any>('http://localhost:3003/auth/register', body, { headers })
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
