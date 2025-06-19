import { Component, OnInit } from '@angular/core';
import { CustomModalComponent } from '../../shared/custom-modal/custom-modal.component';
import { ApiService } from '../../core/api.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CustomModalComponent,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent implements OnInit {
  form: FormGroup;
  courses: any[] = [];

  ngOnInit(): void {
    this.apiService.getCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('error loadinfg', error);
      }
    );
  }

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      course: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.apiService.sendUserInfo(this.form.value).subscribe({
        next: (res) => {
          console.log('data', res), this.closeCardModal();
          this.form.reset();
        },
        error: (err) => console.log('error', err),
      });
    }
  }

  actionText: any;
  close() {
    throw new Error('Method not implemented.');
  }
  isModalOpen = false;

  openCardModal() {
    this.isModalOpen = true;
  }

  closeCardModal() {
    this.isModalOpen = false;
  }
}
