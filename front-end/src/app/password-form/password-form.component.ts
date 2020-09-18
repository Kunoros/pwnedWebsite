import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
})
export class PasswordFormComponent implements OnInit {
  passwordForm = new FormGroup({
    userPassword: new FormControl(''),
  });

  readonly URL = '/api';

  test: any;

  constructor(private http: HttpClient) {}

  onSubmit() {
    // this.http.get<any>(this.URL);
    this.http
      .post<any>(
        this.URL,
        {
          title: this.passwordForm.value.userPassword,
        },
        { responseType: 'Json' }
      )
      .subscribe((data) => {
        this.test = data;
      });
  }

  ngOnInit(): void {}
}
