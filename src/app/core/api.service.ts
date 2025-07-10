import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiURL;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getCourses(): Observable<any[]> {
    return this.isBrowser()
      ? this.http.get<any[]>(`${this.apiUrl}/excel/courses`)
      : of([]); // SSR-safe
  }

  sendUserInfo(data: any): Observable<any> {
    return this.isBrowser()
      ? this.http.post(`${this.apiUrl}/excel/add`, data)
      : of(null); // SSR-safe
  }

  getUsers(): Observable<any[]> {
    return this.isBrowser()
      ? this.http.get<any[]>(`${this.apiUrl}/excel/students`)
      : of([]); // SSR-safe
  }

  deleteUserById(id: string): Observable<any> {
    return this.isBrowser()
      ? this.http.delete(`${this.apiUrl}/excel/student/${id}`)
      : of(null);
  }

  getExcelAsBase64(): Observable<any> {
    return this.isBrowser()
      ? this.http.get(`${this.apiUrl}/excel/base64`)
      : of(null);
  }
}
