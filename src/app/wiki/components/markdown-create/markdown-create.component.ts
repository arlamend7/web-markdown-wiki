import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdService } from '../../service/md.service';
import { MarkdownConverterService } from '../../service/markdown-converter.service';
@Component({
  templateUrl: './markdown-create.component.html',
  styleUrls: ['./markdown-create.component.css']
})
export class MarkdownCreateComponent{ 
  text : string = "";
  html
  constructor(private route : Router,
              private MdService : MdService,
              private markdownConverter : MarkdownConverterService){
  }
  transform(){
    this.html = this.markdownConverter.render(this.text)
  }
}
