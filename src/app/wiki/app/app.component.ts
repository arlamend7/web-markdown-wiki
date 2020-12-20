import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdService } from '../service/md.service';
import {Converter} from 'showdown';
@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'markdown-web';
  dir : string[] = []
  navegate = (fileName) => this.route.navigate(['wiki/visualization/' + fileName])
  create = () => this.route.navigate(['wiki/create'])
  constructor(private route : Router,
              private MdService : MdService){

  }
  ngOnInit(): void {
    this.getDir();
  }
  getDir(){
    this.MdService.getDir().subscribe((x:string[]) => {
      //@ts-ignore
      this.dir = x.dir.map((x: string) => x.substring(0,x.length-3))
    })
  }
}
