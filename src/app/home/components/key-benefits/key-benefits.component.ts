import { Component } from "@angular/core";

@Component({
  selector: "app-key-benefits",
  templateUrl: "./key-benefits.component.html",
  styleUrl: "./key-benefits.component.scss",
})
export class KeyBenefitsComponent {
  cards = [
    {
      title: "100% Automation",
      desc: "Post your job description and relax. The system autonomously handles the rest, delivering a shortlist of top candidates.",
      class: "lg:col-6 xl:col-4",
    },
    {
      title: "Automated Candidate Sourcing",
      desc: "Our platform proactively engages potential candidates, inviting them to your interviews—this feature is included with all plans.",
      class: "lg:col-6 xl:col-4",
    },
    {
      title: "Simplified",
      desc: "We keep it simple. The platform's design focuses on ease of use, sparing you from unnecessary complexity. You’ll love it!",
      class: "lg:col-6 xl:col-4",
    },
    {
      title: "Precise Candidate Evaluations",
      desc: "Leverage our advanced assessment engine for highly accurate candidate evaluations.",
      class: "lg:col-6 xl:col-6",
    },
    {
      title: "Increased Recruitment Funnel Conversion",
      desc: "Automated engagement and convenient interview scheduling double the conversion rate in your recruitment process.",
      class: "lg:col-12 xl:col-6",
    },
  ];
}
