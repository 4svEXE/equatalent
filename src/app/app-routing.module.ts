import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  // },
  // {
  //   path: 'blogs',
  //   loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)
  // },
  // {
  //   path: 'contact',
  //   loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  // },
  // Fallback when no prior route is matched
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
