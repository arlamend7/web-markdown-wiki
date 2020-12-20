import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdService } from '../../service/md.service';
import { MarkdownConverterService } from '../../service/markdown-converter.service';
@Component({
  template: '<div class="pr-5" [innerHTML]="html"></div>',
  styleUrls:['./markdown-file-render.component.css']
})
export class MarkdownFileRenderComponent implements OnInit{
  html;
  constructor(private route : ActivatedRoute,
              private MdService : MdService,
              private markdownConverter : MarkdownConverterService){}

  ngOnInit(): void {
    this.route.params.subscribe(({FileName}) => {
      this.getFile(FileName);
    })
  }
  
  getFile(FileName){
      this.MdService.get(FileName).subscribe(x => {
        //@ts-ignore
        this.html = this.markdownConverter.render(x.text);
        
      },(e) => {this.html = "<span>erro</span>"});
  }
}
