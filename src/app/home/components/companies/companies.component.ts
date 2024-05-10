import { Component } from "@angular/core";

@Component({
  selector: "app-companies",
  templateUrl: "./companies.component.html",
  styleUrl: "./companies.component.scss",
})
export class CompaniesComponent {
  imgPath = "assets/img/home/companies/";
  companies = [
    "Forte Group.svg",
    "costa.svg",
    "i5.svg",
    "creative valley png.svg",
    "skipp logo.svg",
    "adskill logo_main black.svg",
    "Bunkering.svg",
    "i.svg",
  ];
}
