import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { CommonModule } from '@angular/common';
import { CustomModalComponent } from '../../shared/custom-modal/custom-modal.component';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-stud-table',
  standalone: true,
  imports: [CommonModule, CustomModalComponent, FormsModule],
  templateUrl: './stud-table.component.html',
  styleUrl: './stud-table.component.scss',
})
export class StudTableComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  selectedStudentId: any;
  isDeleteModalOpen: boolean = false;
  students: any[] = [];

  pageSize = 10;
  currentPage = 1;
  pagedStudents: any[] = [];
  startDate: string = '';
  endDate: string = '';
  searchTerm: string = '';

  get totalPages(): number {
    return Math.ceil(this.students.length / this.pageSize);
  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(
      (data) => {
        this.students = data;
        this.updatePagedStudents();
      },
      (error) => console.error('error loading', error)
    );
  }

  downloadExcel(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.apiService.getExcelAsBase64().subscribe({
      next: (res) => {
        const link = document.createElement('a');
        link.href = `data:${res.mimeType};base64,${res.base64}`;
        link.download = res.filename;
        link.click();
      },
      error: (err) => {
        console.error('Ошибка при скачивании Excel', err);
      },
    });
  }

  onSearch(): void {
    const filtered = this.students.filter((student) =>
      student.fullName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    this.pagedStudents = filtered.slice(0, this.pageSize);
    this.currentPage = 1;
  }

  updatePagedStudents(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedStudents = this.students.slice(start, start + this.pageSize);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedStudents();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedStudents();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagedStudents();
    }
  }
  openDeleteModal(id: number): void {
    this.selectedStudentId = id;
    this.isDeleteModalOpen = true;
  }

  confirmDelete(): void {
    if (this.selectedStudentId !== null) {
      this.apiService.deleteUserById(this.selectedStudentId).subscribe(() => {
        this.students = this.students.filter(
          (s) => s.id !== this.selectedStudentId
        );

        this.updatePagedStudents();

        this.closeModal();
      });
    }
  }

  closeModal(): void {
    this.isDeleteModalOpen = false;
    this.selectedStudentId = null;
  }

  resetFilter(): void {
    this.startDate = '';
    this.endDate = '';
    this.updatePagedStudents(); // Покажет всё
  }

  filterByDate(): void {
    const start = this.startDate ? new Date(this.startDate) : null;
    const end = this.endDate ? new Date(this.endDate) : null;

    const filtered = this.students.filter((s) => {
      const studentDate = new Date(s.date);
      if (start && studentDate < start) return false;
      if (end && studentDate > end) return false;
      return true;
    });

    this.pagedStudents = filtered.slice(0, this.pageSize);
    this.currentPage = 1;
  }
}
