import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-homepage',
  imports: [ButtonComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  imageUrl: string = 'assets/angular-logo.svg';

  showAlert() {
    alert('You clicked the button!');
  }
}
