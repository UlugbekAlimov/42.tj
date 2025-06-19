import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/api.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss',
})
export class RegistrationFormComponent implements OnInit {
  @Input() showTitle: boolean = true;
  @Output() registered = new EventEmitter<void>();

  form: FormGroup;
  courses: any[] = [];
  loading: boolean = false;
  error: string = '';
  success: boolean = false;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      course: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.apiService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (err) => {
        this.error = 'Ошибка загрузки курсов';
      },
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.error = '';
      this.apiService.sendUserInfo(this.form.value).subscribe({
        next: () => {
          this.success = true;
          this.form.reset();
          this.registered.emit();
        },
        error: (err) => {
          this.error = 'Ошибка отправки данных';
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }
}
