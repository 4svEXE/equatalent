import { Component } from "@angular/core";

@Component({
  selector: "app-how-it-works",
  templateUrl: "./how-it-works.component.html",
  styleUrl: "./how-it-works.component.scss",
})
export class HowItWorksComponent {
  cards = [
    {
      icon: "pi-clock",
      title: "Upload the Job Description",
      desc: "Also choose the interview language and revise interview questions.",
      shortDesc: "It takes 2 minutes",
    },
    {
      icon: "pi-clock",
      title: "Invite Candidates",
      desc: "Use our auto-generated link and post it on all job boards, let candidates come to this link.",
      shortDesc: "It takes 5 minutes",
    },
    {
      icon: "pi-microchip",
      title: "Automated Interviews",
      desc: "EquaTalent's AI-driven platform conducts comprehensive unbiased interviews 24/7 with every candidate, saving you countless hours and discomfort.",
      shortDesc: "Fully automated",
    },
    {
      icon: "pi-microchip",
      title: "Shortlist the Best",
      desc: "Our advanced algorithms assess candidates based on skills and potential. Receive a curated list of top candidates with detailed reports.",
      shortDesc: "Fully automated",
    },
  ];
}
