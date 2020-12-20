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
  FileName
  table = () => this.add(this.markdownConverter.Examples.Table())
  Headers = () => this.add(this.markdownConverter.Examples.Headers())
  Bold = () => this.add(this.markdownConverter.Examples.Bold())
  Italic = () => this.add(this.markdownConverter.Examples.Italic())
  BoldItalic = () => this.add(this.markdownConverter.Examples.BoldItalic())
  Sub = () => this.add(this.markdownConverter.Examples.Sub())
  Strike = () => this.add(this.markdownConverter.Examples.Strike())
  Underline = () => this.add(this.markdownConverter.Examples.Underline())
  Comment = () => this.add(this.markdownConverter.Examples.Comment())
  Link = () => this.add(this.markdownConverter.Examples.Link())
  Quote = () => this.add(this.markdownConverter.Examples.Quote())
  Lists = () => this.add(this.markdownConverter.Examples.Lists())
  Image = () => this.add(this.markdownConverter.Examples.Image())
  Code = () => this.add("```"+this.markdownConverter.Examples.Code()+"\n```")
;  constructor(private route : Router,
              private MdService : MdService,
              private markdownConverter : MarkdownConverterService){
  }
  transform(){
    this.html = this.markdownConverter.render(this.text)
  }
  save(){
    this.MdService.post(this.FileName,this.text).subscribe(x => {
      console.log(x);
      this.route.navigate(['wiki/visualization/' + this.FileName])
    })
  }
  @HostListener("keydown.tab",["$event"])
  teste(event){
    event.preventDefault()
    this.text += "\t"
    
  }
  private add(text){
    if(this.text != "" && this.text[this.text.length -1] != "\n"){
      this.text += "\n"
    }
    this.text +=text;
    this.transform()
  }
}
