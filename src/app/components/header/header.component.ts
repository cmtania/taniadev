import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  scheduleCall() {
    window.open('https://calendly.com/tania-christian/30min', '_blank');
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = '/christian_tania_resume.pdf';
    link.download = 'Christian_Tania_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
