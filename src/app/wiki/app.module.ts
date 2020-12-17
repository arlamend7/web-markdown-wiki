import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import {HttpClientModule} from '@angular/common/http'
import { MdService } from './service/md.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownFileRenderComponent } from './components/markdown-file-render/markdown-file-render.component';
import { CommonModule } from '@angular/common';
import { MarkdownCreateComponent } from './components/markdown-create/markdown-create.component';
import { MarkdownConverterService } from './service/markdown-converter.service';
@NgModule({
  declarations: [
    AppComponent,
    MarkdownFileRenderComponent,
    MarkdownCreateComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [MdService,MarkdownConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
