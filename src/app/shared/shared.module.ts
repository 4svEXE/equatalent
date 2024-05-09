import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClickOutsideDirective } from "../directives";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [ClickOutsideDirective, HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [],
})
export class SharedModule {}
