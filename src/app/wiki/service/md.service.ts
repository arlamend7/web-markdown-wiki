import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
@Injectable({providedIn : "root"})
export class MdService {
    url : string = "http://localhost:3000/wiki/";
    path:string = "D://markdown/";
    constructor(private http : HttpClient){}

    getDir(){
        return this.http.get(this.url);
    }
    get(file:string){
        return this.http.get(this.url + file)
    }
    getLocalFile(FileName){
        return import(`raw-loader!${this.path + FileName}.md`);
    }
    post(file:string,text :string){
        return this.http.post(this.url + file,{text})
    }
    put(file:string,text :string){
        return this.http.put(this.url + file,{body:text})
    }
    delete(file:string){
        return this.http.delete(this.url + file)
    }
}