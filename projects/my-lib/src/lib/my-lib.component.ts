import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toster" [ngClass]="type">
      {{ message }}
    </div>
  `,
  styles: [
    `
      .toster {
        padding: 15px;
        border-radius: 5px;
        margin: 10px;
      }
      .success {
        background-color: green;
        color: white;
      }
      .error {
        background-color: red;
        color: white;
      }
      .info {
        background-color: blue;
        color: white;
      }
    `,
  ],
})
export class MyLibComponent {
  @Input() message = 'Default message';
  @Input() type: 'success' | 'error' | 'info' = 'info';
}
