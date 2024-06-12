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

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MessagesModule, ButtonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
})
export class StatusComponent {
  public myForm: FormGroup;
  public msg: Message[] | any;
  public options: string[] | any = ['CUSTOMER', 'MERCHANT'];

  constructor() {
    this.myForm = new FormGroup({
      userType: new FormControl('', Validators.required),
    });
  }
  submitForm() {
    localStorage.setItem('status', this.myForm.value.userType);
  }
}
