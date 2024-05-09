import { Component } from "@angular/core";

@Component({
  selector: "app-advantages",
  templateUrl: "./advantages.component.html",
  styleUrl: "./advantages.component.scss",
})
export class AdvantagesComponent {
  imgPath = "assets/img/home/";

  advantages = [
    {
      icon: "Featured-icon.svg",
      desc: "Are traditional interviews draining your resources and introducing bias into your hiring process?",
    },
    {
      icon: "Featured-icon.svg",
      desc: "Spending eternity scheduling interviews and following up?",
    },
    {
      icon: "Featured-icon.svg",
      desc: "Feeling exhausted talking with energy vampires?",
    },
  ];
}
