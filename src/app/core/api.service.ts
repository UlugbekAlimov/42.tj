import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/excel/courses`);
  }

  sendUserInfo(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/excel/add`, data);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/excel/students`);
  }

  deleteUserById(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/excel/student/${id}`);
  }

  getExcelAsBase64(): Observable<any> {
    return this.http.get(`${this.apiUrl}/excel/base64`);
  }
}
