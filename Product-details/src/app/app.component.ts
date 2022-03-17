import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Product-details';

  constructor(private router: Router) { }

  navigateToFirst() {
    this.router.navigate(['new-products'])
  }
  navigateToSecond() {
    this.router.navigateByUrl('/second')
  }
}
