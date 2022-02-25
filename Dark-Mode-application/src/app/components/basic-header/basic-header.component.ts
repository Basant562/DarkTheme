import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.scss']
})
export class BasicHeaderComponent {

  constructor() { }
  
   darkMode(){
   var element = document.body;
   element.classList.toggle("dark-mode");
   }

   lightMode(){
    var element = document.body;
    element.classList.toggle("light-mode");
   }

  ngOnInit(): void {
  }

}
