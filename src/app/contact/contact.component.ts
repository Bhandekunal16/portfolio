import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, throwError } from 'rxjs';
import { Message } from 'primeng/api';
import { SharedModule } from '../shared/shared.module';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public myForm: FormGroup;
  public msg: Message[] | any;

  constructor(private http: HttpClient, private shared: SharedService) {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      message: new FormControl(''),
    });
  }

  public submit(): void {
    const [email, message]: [any, any] = [
      this.myForm.value.email,
      this.myForm.value.message,
    ];

    this.messageHandler('info', 'sending message');

    this.email({
      to: email,
      message: `your message received successfully.`,
    }).subscribe((ele) => {
      this.messageHandler(
        'success',
        `your message sent successfully`,
        'success'
      );
    });
    this.email({
      to: 'roboticdev07@gmail.com',
      message: `this is message : ${message}, sender : ${email}`,
    }).subscribe((ele) => {
      this.messageHandler(
        'success',
        `your message received by us successfully`,
        'success'
      );

      if (ele.success) {
        this.clearMessage();
      }
    });
  }

  private email(body: any): Observable<any> {
    const headers = this.shared.header();
    return this.http
      .post<any>(
        'https://mailer-service-eight.vercel.app/message/send-email',
        body,
        { headers }
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  private messageHandler(severity: string, detail: string, summary?: string) {
    this.msg = [
      {
        severity: severity,
        detail: detail,
        summary: summary,
      },
    ];
  }

  private clearMessage() {
    setTimeout(() => {
      this.msg = [];
    }, 3000);
  }
}
