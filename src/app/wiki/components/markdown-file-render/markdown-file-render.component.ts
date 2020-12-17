import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdService } from '../../service/md.service';
import * as marked from 'marked';
@Component({
  template: '<div class="col-6" [innerHTML]="html"></div>',
  styleUrls:['./markdown-file-render.component.css']
})
export class MarkdownFileRenderComponent implements OnInit{
  html;
  constructor(private route : ActivatedRoute,
              private MdService : MdService){}

  ngOnInit(): void {
    this.route.params.subscribe(({FileName}) => {
      this.getFile(FileName);
    })
  }
  
  getFile(FileName){
      this.MdService.get(FileName).subscribe(x => {
        //@ts-ignore
        this.html = marked(x.text);
        console.log(this.html);
        
      },(e) => {this.html = "<span>erro</span>"});
  }
}
