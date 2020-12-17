import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "wiki",
    loadChildren: () =>
      import("../app/wiki/app.module").then((x) => x.AppModule),
  },
  { path: "", redirectTo: "wiki/visualization",pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
