import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input() rating: number = 0; // Input rating value

  stars: any[] = [];


  ngOnInit() {
    this.updateStars();
  }
  updateStars(): void {
    this.stars = [];
    const fullStars = Math.floor(this.rating);
    const halfStar = this.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      this.stars.push('full');
    }
    if (halfStar) {
      this.stars.push('half');
    }
    for (let i = 0; i < emptyStars; i++) {
      this.stars.push('empty');
    }
  }
}