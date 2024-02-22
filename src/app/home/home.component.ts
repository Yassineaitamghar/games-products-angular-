import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private isAnimating: boolean = false;

  startAnimation() {
    this.isAnimating = true;
  }

  stopAnimation() {
    this.isAnimating = false;
  }
}
