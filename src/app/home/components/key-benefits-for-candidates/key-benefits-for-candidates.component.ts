import { Component } from "@angular/core";

@Component({
  selector: "app-key-benefits-for-candidates",
  templateUrl: "./key-benefits-for-candidates.component.html",
  styleUrl: "./key-benefits-for-candidates.component.scss",
})
export class KeyBenefitsForCandidatesComponent {
  cards = [
    {
      title: "A More Relaxed Interviewing Experience",
      desc: "Data shows that candidates feel less pressure when interviewed by AI, leading to a more authentic and open dialogue.",
      icon: "pi-face-smile",
    },
    {
      title: "Flexible Interview Scheduling",
      desc: "Interviews can be initiated by candidates at their convenience, ensuring flexibility and higher conversions.",
      icon: "pi-calendar",
    },
  ];
}
