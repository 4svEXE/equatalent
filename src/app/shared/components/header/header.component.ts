import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  displayMenu = false;
  menuItems = ["About", "Blog", "Contact"];

  constructor() {}

  toggleMenu(event: Event): void {
    console.log("Attempting to open menu");
    event.stopPropagation();
    this.displayMenu = !this.displayMenu;
  }

  closeMenu() {
    console.log("Attempting to close menu");
    this.displayMenu = false;
  }
}
