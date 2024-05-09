import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared";
import { CarouselModule } from "primeng/carousel";

import { FirstScreenComponent } from "./components/first-screen/first-screen.component";
import { CompanysComponent } from "./components/companys/companys.component";
import { AdvantagesComponent } from "./components/advantages/advantages.component";
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";
import { KeyBenefitsComponent } from "./components/key-benefits/key-benefits.component";
import { KeyBenefitsForCandidatesComponent } from "./components/key-benefits-for-candidates/key-benefits-for-candidates.component";
import { ReviewsCarouselComponent } from "./components/reviews-carousel/reviews-carousel.component";
import { BrandsQuotesComponent } from "./components/brands-quotes/brands-quotes.component";
import { BookADemoComponent } from "./components/book-a-demo/book-a-demo.component";

const routes: Routes = [{ path: "", component: HomeComponent }];

const contenders = [
  HomeComponent,
  FirstScreenComponent,
  CompanysComponent,
  AdvantagesComponent,
  HowItWorksComponent,
  KeyBenefitsComponent,
  KeyBenefitsForCandidatesComponent,
  ReviewsCarouselComponent,
  BrandsQuotesComponent,
  BookADemoComponent
];

const modules = [
  CommonModule,
  SharedModule,
  RouterModule.forChild(routes),
  CarouselModule,
];

@NgModule({
  declarations: [contenders],
  imports: [modules],
  exports: [modules, contenders],
})
export class HomeModule {}
