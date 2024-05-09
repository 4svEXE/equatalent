import { Component } from "@angular/core";

@Component({
  selector: "app-companys",
  templateUrl: "./companys.component.html",
  styleUrl: "./companys.component.scss",
})
export class CompanysComponent {
  imgPath = "assets/img/home/companys/";
  companys = [
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
