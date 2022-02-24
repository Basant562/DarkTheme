import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.scss']
})
export class BasicHeaderComponent {

  constructor() { }
  
   darkMode(){
     document.body.classList.add("dark-mode");
   }

  ngOnInit(): void {
  }

}
