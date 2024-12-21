import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router , RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  private router = inject(Router);
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3001';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      try {
        const users: any[] =
          (await this.http
            .get<any[]>(
              `${this.apiUrl}/users?username=${username}&password=${password}`
            )
            .toPromise()) ?? [];

        if (users.length > 0) {
          console.log('Login success', users[0]);
          this.router.navigate(['']);
        } else {
          console.error('Invalid username or password');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    } else {
      console.log('Invalid form');
    }
  }
}
