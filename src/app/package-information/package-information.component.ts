import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SharedService } from '../shared.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-package-information',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './package-information.component.html',
  styleUrl: './package-information.component.scss',
})
export class PackageInformationComponent {
  constructor(private http: HttpClient, private shared: SharedService) {
    this.myForm = new FormGroup({
      PackageName: new FormControl(''),
    });
  }
  public dataList: any;
  public name: string | undefined;
  public createdOn: string | undefined | Date | number;
  public modifiedOn: string | undefined | Date | number;
  public author: string | undefined;
  public description: string | undefined;
  public maintainers: string | undefined;
  public license: string | undefined;
  public date: any[] = [];
  public data: any[] = [];
  public myForm: FormGroup;
  public data2: any[] = [];
  public loader: boolean = false;
  public msg: Message[] | any;

  public call(): void {
    this.loader = true;
    this.messageHandler('info', 'searching for package');
    this.info({ name: this.myForm.get('PackageName')?.value }).subscribe(
      (ele) => {
        this.name = ele.data.name?.toUpperCase();
        this.createdOn = new Date(ele.data.time.created).toDateString();
        this.modifiedOn = new Date(ele.data.time.modified).toDateString();
        this.author = ele.data.author.name;
        this.description = ele.data.description;
        this.maintainers = ele.data.maintainers[0].name;
        this.license = ele.data.license;

        const [obj, obj2, next, lastElements]: [any, any, any[], any[]] = [
          ele.data.time,
          ele.data.versions,
          [],
          [],
        ];

        this.date = Object.entries(obj).map(([key, value]) => ({ key, value }));
        this.data = Object.entries(obj2).map(([key, value]) => ({
          key,
          value,
        }));

        for (let index = 0; index < this.data.length; index++) {
          const dependencies = this.data[index].value.dependencies;
          next.push([dependencies]);
        }
        const lastindex: number = next.length - 1;

        lastElements.push(...Object.values(next[lastindex]));

        this.dataList = Object.keys(lastElements[0]).map((key) => ({
          key: key,
          value: lastElements[0][key],
        }));

        this.messageHandler('success', `data found for ${this.name}`);
        this.clearMessage();
      }
    );
    this.loader = false;
  }

  public formatDate(date: any): string {
    return new Date(date).toDateString();
  }

  private info(name: any): Observable<any> {
    const headers = this.shared.header();
    return this.http
      .post<any>(
        'https://townhall-ten.vercel.app/info',
        { name: name.name },
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
    }, 1000);
  }
}
