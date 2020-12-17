import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { MarkdownCreateComponent } from './components/markdown-create/markdown-create.component';
import { MarkdownFileRenderComponent } from './components/markdown-file-render/markdown-file-render.component';


const routes: Routes = [
  {
    path:"visualization",
    component: AppComponent,
    children: [
      {
        path:":FileName",
        component:MarkdownFileRenderComponent
      }
    ]
  },
  {
    path:"create",
    component : MarkdownCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
