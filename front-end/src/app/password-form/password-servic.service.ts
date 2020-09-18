import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PasswordFormComponent } from './password-form.component';

@Injectable({
  providedIn: 'root',
})
export class PasswordServicService {
  constructor(private http: HttpClient) {}
}
