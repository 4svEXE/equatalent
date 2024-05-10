import { Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent {
  loadet = false
  ngOnInit() {
    window.onload = () => {
      this.loadet = true
      console.log('Сторінка повністю завантажена');
    };
  }
}
