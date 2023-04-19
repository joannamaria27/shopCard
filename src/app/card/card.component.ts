import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isMobile = false;
  lists = [
    { img: "/assets/1.png", title: "YOUR SPRING LOOK", subtitle: "Daytime dressing pure&simple" },
    { img: "/assets/2.png", title: "MODERN BUSINESS OUTFIT", subtitle: "Smart casual for you" },
    { img: "/assets/3.png", title: "NEW STREET STYLE", subtitle: "Discover the art of outdoor" },
    //   { img: "1.png", title: "YOUR SPRING LOOK", subtitle: "Daytime dressing pure&simple" },
    // { img: "2.png", title: "MODERN BUSINESS OUTFIT", subtitle: "Smart casual for you" },
  ]
  ngOnInit() {
    if (window.screen.width === 500) { // 768px portrait
      this.isMobile = true;
    }
  }
}
