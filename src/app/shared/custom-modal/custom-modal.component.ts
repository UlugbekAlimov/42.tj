import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.scss'
})
export class CustomModalComponent {
  @Input() visible = false;
  @Input() actionText = 'Закрыть';
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }

  onBackdropClick() {
    this.close();
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}