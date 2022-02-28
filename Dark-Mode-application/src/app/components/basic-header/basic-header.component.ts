import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.scss']
})
export class BasicHeaderComponent {

  constructor() { }
  toggleDefaultTheme() {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }

  toggleDarkTheme() {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  }
  toggleLightTheme() {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    document.body.classList.add('active');
  }

  ngOnInit(): void {
  }

}
