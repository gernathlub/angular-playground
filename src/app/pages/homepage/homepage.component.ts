import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  imageUrl: string = 'assets/angular-logo.svg';

  showAlert() {
    alert('You clicked the button!');
  }
}
