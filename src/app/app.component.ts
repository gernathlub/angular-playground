import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, FooterComponent, HomepageComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
}
