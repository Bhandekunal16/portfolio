import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-package-information',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  templateUrl: './package-information.component.html',
  styleUrl: './package-information.component.scss',
})
export class PackageInformationComponent {

dataList: any;
  constructor(private http: HttpClient) {
    this.myForm = new FormGroup({
      PackageName: new FormControl(''),
    });
  }
  public name: string | undefined;
  public createdOn: string | undefined | Date | number;
  public modifiedOn: string | undefined | Date | number;
  public author: string | undefined;
  public description: string | undefined;
  public maintainers: string | undefined;
  public license: string | undefined;
  public date: any[] = [];
  public ex: string = `const match: any = new database().getByProperties( { key : "value" },'name');`;
  public ex2: string = `const match: any = brain.getByProperties( { key: "value" }, 'name' );`;
  public data: any[] = [];
  public myForm: FormGroup;
  public nodes!: any[];
  public selectedNodes: any;
  public data2: any[] = [];

  call() {
    this.info({ name: this.myForm.get('PackageName')?.value }).subscribe(
      (ele) => {
        this.name = ele.data.name?.toUpperCase();
        this.createdOn = new Date(ele.data.time.created).toDateString();
        this.modifiedOn = new Date(ele.data.time.modified).toDateString();
        this.author = ele.data.author.name;
        this.description = ele.data.description;
        this.maintainers = ele.data.maintainers[0].name;
        this.license = ele.data.license;

        const obj = ele.data.time;
        const arr = [];
        for (let key in obj) {
          arr.push({ key: key, value: obj[key] });
        }
        this.date = arr;

        const obj2 = ele.data.versions;
        const arr2: any[] = [];
        for (let key in obj2) {
          arr2.push({ key: key, value: obj2[key] });
        }
        this.data = arr2;

        const next = [];
  

        for (let index = 0; index < this.data.length; index++) {
          const dependencies = this.data[index].value.dependencies;
          next.push([dependencies]);
        }

        this.dataList = next
        console.log(next);
      }
    );
  }

  formatDate(date: any): string {
    return new Date(date).toDateString();
  }

  info(name: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

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
}
