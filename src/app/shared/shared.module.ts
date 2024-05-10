import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClickOutsideDirective } from "../directives";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PreloaderComponent } from "./components/preloader/preloader.component";

@NgModule({
  declarations: [ClickOutsideDirective, HeaderComponent, FooterComponent, PreloaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, PreloaderComponent],
  providers: [],
})
export class SharedModule {}
