import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EPIC Network'
  links = [
    { label: 'Mission & Values', url: '/mission' },
    { label: 'About', url: '/about' },
    { label: 'Contact Us', url: '/contact' },
    { label: 'Listserv', url: '/listserv' }
  ]
}
