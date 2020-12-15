import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdService } from './service/md.service';
import * as marked from 'marked';
@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'markdown-web';
  html;
  value = "";
  constructor(private route : ActivatedRoute,
              private MdService : MdService){
    this.save()
  }
  transform(value){
    this.value = value
    this.html = marked(value);
  }
  save(){
    this.MdService.get("try").subscribe(x => {
      //@ts-ignore
      this.html = marked(x.text);
      
    })
  }
  getLocalFile(){
    this.route.params.subscribe(({name}) => {
      import(`raw-loader!../markdown/${name}.md`).then(x => {
        this.html = marked(x.default);
      })
    })
  }
}
