import { Component, HostListener, OnInit } from '@angular/core';
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

  ]
  screenMode: any;
  ngOnInit() {
    let screenWidth = window.innerWidth;

    if (screenWidth > 500)
      this.isMobile = false;
    else
      this.isMobile = true;

  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    let screenWidth = window.innerWidth;

    if (screenWidth > 500)
      this.isMobile = false;
    else
      this.isMobile = true;
  }
}
