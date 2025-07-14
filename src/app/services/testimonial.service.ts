import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../core/api.service';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private testimonialsSubject = new BehaviorSubject<any[]>([]);
  public testimonials$ = this.testimonialsSubject.asObservable();

  constructor(private apiService: ApiService) {
    this.loadTestimonials();
  }

  loadTestimonials(): void {
    this.apiService.getTestimonials().subscribe({
      next: (data) => {
        this.testimonialsSubject.next(data);
      },
      error: (error) => {
        console.error('Ошибка при загрузке отзывов:', error);
        this.testimonialsSubject.next([]);
      }
    });
  }

  addTestimonial(testimonial: any): Observable<any> {
    return new Observable(observer => {
      this.apiService.addTestimonial(testimonial).subscribe({
        next: (data) => {
          const currentTestimonials = this.testimonialsSubject.value;
          this.testimonialsSubject.next([...currentTestimonials, data]);
          observer.next(data);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }

  getTestimonials(): Observable<any[]> {
    return this.testimonials$;
  }
} 