import { Component } from "@angular/core";

@Component({
  selector: "app-reviews-carousel",
  templateUrl: "./reviews-carousel.component.html",
  styleUrl: "./reviews-carousel.component.scss",
})
export class ReviewsCarouselComponent {
  cards = [
    {
      imageUrl: "assets/img/home/carousel-01.png",
      rating: 5,
      desc: "With EquaTalent, we've not only streamlined our hiring process but also significantly improved the quality of our hires",
      name: "Samantha",
      position: "HR manager, TheBunkering",
    },
    {
      imageUrl: "assets/img/home/carousel-01.png",
      rating: 5,
      desc: "EquaTalent has been an invaluable tool for enhancing our hiring efficiency and attracting exceptional candidates.",
      name: "Emily",
      position: "HR Coordinator, TheBunkering",
    },
    {
      imageUrl: "assets/img/home/carousel-01.png",
      rating: 5,
      desc: "Thanks to EquaTalent, our hiring process has become more streamlined, resulting in superior hires.",
      name: "David",
      position: "HR Assistant, TheBunkering",
    }
  ];

  getRating(rating: number = 5) {
    return new Array(rating).fill(1);
  }
}
