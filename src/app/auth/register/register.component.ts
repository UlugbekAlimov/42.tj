import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from '../../models/auth.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  private apiUrl = 'http://localhost:3001/'; 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]]
    });
  }

  passwordMatchValidator(control: any): { [key: string]: boolean } | null {
    if (this.registerForm) {
      if (control.value !== this.registerForm.get('password')?.value) {
        return { 'mismatch': true };
      }
    }
    return null;
  }

  async onSubmit():Promise<void> {
    if(this.registerForm.valid){
      const { username, password } = this.registerForm.value

      const newUser = { username, password }

      try {
        const response = await this.http.post<AuthUser>(`${this.apiUrl}/users`, newUser)
        console.log('success', response);
        this.router.navigate(['/login']);
      } catch (err){
        console.log('Register error', err)
      }
    } else {
      console.log('invalid form');
      
    }
  }
}
